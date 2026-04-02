import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <p>Welcome to the blog page!</p>
    </div>
  );
}
