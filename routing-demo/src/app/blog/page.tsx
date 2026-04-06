import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 2000);
  });

  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Blog</h1>
      <p>Welcome to the blog page!</p>
    </div>
  );
}
