import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

export default function Blog() {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Blog</h1>
      <p>Welcome to the blog page!</p>
    </div>
  );
}
