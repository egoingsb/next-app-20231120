import "./globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Control from "./Control";
type post = {
  id: string;
  title: string;
  body: string;
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const res = await fetch("http://localhost:9999/posts", {
    next: { revalidate: 0 },
  });
  const posts = await res.json();
  return (
    <html lang="en">
      <body>
        <h1>
          <Link href="/">WEB</Link>
        </h1>
        <input type="text" placeholder="search" />
        <ul>
          {/* @ts-ignore */}
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <Link href={"/read/" + post.id}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
        <article>{children}</article>
        <Control />
      </body>
    </html>
  );
}
