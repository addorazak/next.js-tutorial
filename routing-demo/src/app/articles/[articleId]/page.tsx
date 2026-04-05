import Link from "next/link";
import { use } from "react";

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);

  return (
    <>
      <h1>News Article</h1>
      <p>This is the content of the news article.</p>
      <p>Reading in language: {lang}</p>

      <Link href={`/articles/${articleId}?lang=en`}>English</Link>
      <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
      <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
    </>
  );
}
