import "./globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";
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
        <ul>
          <li>
            <Link href="/create">create</Link>
          </li>
          <li>
            <Link href="/update/1">update</Link>
          </li>
          <li>
            <button>delete</button>
          </li>
        </ul>
      </body>
    </html>
  );
}
