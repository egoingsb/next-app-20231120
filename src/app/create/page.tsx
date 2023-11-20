"use client";

import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();
  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        // @ts-ignore
        const title = event.target.title.value;
        // @ts-ignore
        const body = event.target.body.value;
        const res = await fetch("http://localhost:9999/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        });
        const result = await res.json();
        router.push("/read/" + result.id);
        router.refresh();
      }}
    >
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="body" placeholder="body"></textarea>
      </p>
      <p>
        <input type="submit" />
      </p>
    </form>
  );
}
