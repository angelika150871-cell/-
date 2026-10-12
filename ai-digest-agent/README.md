# AI-дайджест агент

Каждый день в **10:00 (МСК)** собирает свежие новости об ИИ для (1) дизайна сайтов и баннеров
и (2) создания/ведения YouTube-каналов, и присылает в Telegram-бота и на почту.

Работает через Claude API с веб-поиском, запускается по расписанию в GitHub Actions
(`.github/workflows/daily-digest.yml`) — компьютер включать не нужно.

## Настройка (один раз)
1. **Telegram**: создайте бота у [@BotFather](https://t.me/BotFather) → получите `TELEGRAM_BOT_TOKEN`.
   Напишите боту любое сообщение, затем откройте `https://api.telegram.org/bot<TOKEN>/getUpdates`
   и возьмите `chat.id` → `TELEGRAM_CHAT_ID`.
2. **Почта (Gmail)**: включите двухфакторную защиту и создайте «пароль приложения» →
   `SMTP_USER` (ваш адрес), `SMTP_PASSWORD` (пароль приложения), `EMAIL_TO` (куда слать; можно через запятую).
   Для другого провайдера задайте `SMTP_HOST`/`SMTP_PORT`.
3. **Claude**: ключ с console.anthropic.com → `ANTHROPIC_API_KEY`.
4. В GitHub: *Settings → Secrets and variables → Actions → New repository secret* — добавьте все секреты выше.
5. Проверьте: вкладка *Actions → Daily AI digest → Run workflow*.

## Локальный запуск
```
pip install -r ai-digest-agent/requirements.txt
export ANTHROPIC_API_KEY=...
python ai-digest-agent/agent.py --dry-run   # только вывести дайджест
```

## Настройка
- Время: cron в workflow задан в UTC (`0 7 * * *` = 10:00 МСК). Для другого пояса поменяйте час.
- Темы и формат — переменная `SYSTEM` в `agent.py`.
- GitHub может запускать cron с задержкой в несколько минут.
