"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type UpdateProps = {
  params: {
    id: string;
  };
};
export default function Update({ params: { id } }: UpdateProps) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    fetch("http://localhost:9999/posts/" + id)
      .then((res) => res.json())
      .then((result) => {
        setTitle(result.title);
        setBody(result.body);
      });
  }, []);
  return (
    <div>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          // @ts-ignore
          const title = event.target.title.value;
          // @ts-ignore
          const body = event.target.body.value;
          const res = await fetch("http://localhost:9999/posts/" + id, {
            method: "PATCH",
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
          <input
            type="text"
            name="title"
            value={title}
            placeholder="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </p>
        <p>
          <textarea
            name="body"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
            placeholder="body"
          ></textarea>
        </p>
        <p>
          <input type="submit" value="update" />
        </p>
      </form>
    </div>
  );
}
