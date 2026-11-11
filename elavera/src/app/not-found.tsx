import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container-x py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="h2 mt-4">Страница не найдена</h1>
      <p className="lead mx-auto mt-4">Возможно, украшение больше недоступно или ссылка устарела.</p>
      <Link href="/collections" className="btn btn-solid mt-8">Открыть коллекцию</Link>
    </section>
  );
}
