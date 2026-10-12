"""Ежедневный AI-агент: собирает свежие новости об ИИ для веб-дизайна, баннеров
и ведения YouTube-каналов и отправляет дайджест в Telegram и на почту."""
import os
import re
import smtplib
import sys
from datetime import datetime
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from zoneinfo import ZoneInfo

import anthropic
import requests

MODEL = os.environ.get("ANTHROPIC_MODEL", "claude-sonnet-5-5")
TZ = ZoneInfo(os.environ.get("DIGEST_TZ", "Europe/Moscow"))

SYSTEM = """Ты — исследовательский ИИ-агент. Каждый день ты готовишь дайджест на русском языке
о самых свежих (за последние 1–3 дня, максимум неделя) событиях в мире ИИ по двум темам:
1) ДИЗАЙН САЙТОВ И БАННЕРОВ: новые ИИ-инструменты и обновления (генерация изображений,
   UI/UX, Figma/Framer/Webflow/v0/Lovable и т.п.), промпты, тренды, кейсы, бесплатные лимиты.
2) YOUTUBE: создание и ведение каналов с помощью ИИ — идеи и сценарии, озвучка, видео-генерация,
   монтаж, превью, SEO/теги, аналитика, изменения правил и алгоритмов YouTube, монетизация.
Используй веб-поиск, проверяй даты, не выдумывай факты и ссылки. Если свежего мало — так и скажи.
Формат вывода — ТОЛЬКО Telegram-HTML (разрешены теги <b>, <i>, <a href="...">; без <br>, <ul>, <h1>).
Структура:
<b>🎨 Дизайн сайтов и баннеров</b> — 3–5 пунктов: название, суть в 1–2 предложениях, ссылка.
<b>🎬 YouTube + ИИ</b> — 3–5 пунктов в том же стиле.
<b>💡 Идея дня</b> — одно конкретное практическое действие на сегодня.
Символы &, <, > в тексте экранируй (&amp; &lt; &gt;). Общий объём до ~3500 символов."""


def build_digest() -> str:
    client = anthropic.Anthropic()
    today = datetime.now(TZ).strftime("%d.%m.%Y")
    resp = client.messages.create(
        model=MODEL,
        max_tokens=4000,
        system=SYSTEM,
        tools=[{"type": "web_search_20250305", "name": "web_search", "max_uses": 8}],
        messages=[{"role": "user", "content": f"Сегодня {today}. Подготовь дайджест."}],
    )
    text = "".join(b.text for b in resp.content if b.type == "text").strip()
    if not text:
        raise RuntimeError("Модель вернула пустой ответ")
    return f"<b>📰 AI-дайджест за {today}</b>\n\n{text}"


def split_message(text: str, limit: int = 4000) -> list[str]:
    parts, cur = [], ""
    for line in text.split("\n"):
        if len(cur) + len(line) + 1 > limit and cur:
            parts.append(cur)
            cur = ""
        cur += line + "\n"
    if cur.strip():
        parts.append(cur)
    return parts


def send_telegram(text: str) -> None:
    token, chat_id = os.environ["TELEGRAM_BOT_TOKEN"], os.environ["TELEGRAM_CHAT_ID"]
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    for part in split_message(text):
        payload = {"chat_id": chat_id, "text": part, "parse_mode": "HTML",
                   "disable_web_page_preview": True}
        r = requests.post(url, json=payload, timeout=30)
        if not r.ok:  # битая HTML-разметка — шлём простым текстом
            payload.pop("parse_mode")
            payload["text"] = re.sub(r"<[^>]+>", "", part)
            r = requests.post(url, json=payload, timeout=30)
        r.raise_for_status()


def send_email(text: str) -> None:
    host = os.environ.get("SMTP_HOST", "smtp.gmail.com")
    port = int(os.environ.get("SMTP_PORT", "465"))
    user, password = os.environ["SMTP_USER"], os.environ["SMTP_PASSWORD"]
    to = os.environ.get("EMAIL_TO", user)
    html = "<div style='font-family:Arial,sans-serif;line-height:1.5'>" + text.replace("\n", "<br>") + "</div>"
    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"AI-дайджест {datetime.now(TZ):%d.%m.%Y}: дизайн и YouTube"
    msg["From"], msg["To"] = user, to
    msg.attach(MIMEText(re.sub(r"<[^>]+>", "", text), "plain", "utf-8"))
    msg.attach(MIMEText(html, "html", "utf-8"))
    with smtplib.SMTP_SSL(host, port, timeout=30) as s:
        s.login(user, password)
        s.sendmail(user, [a.strip() for a in to.split(",")], msg.as_string())


def main() -> int:
    digest = build_digest()
    if "--dry-run" in sys.argv:
        print(digest)
        return 0
    errors = []
    for name, fn in (("telegram", send_telegram), ("email", send_email)):
        try:
            fn(digest)
            print(f"{name}: отправлено")
        except Exception as e:  # один канал не должен ломать другой
            errors.append(f"{name}: {e}")
            print(f"{name}: ОШИБКА {e}", file=sys.stderr)
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
