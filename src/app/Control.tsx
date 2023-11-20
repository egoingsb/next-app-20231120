"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function Control() {
  const params = useParams();
  const router = useRouter();
  console.log(params);
  return (
    <ul>
      <li>
        <Link href="/create">create</Link>
      </li>
      {params.id ? (
        <>
          <li>
            <Link href={"/update/" + params.id}>update</Link>
          </li>
          <li>
            <button
              onClick={() => {
                fetch("http://localhost:9999/posts/" + params.id, {
                  method: "DELETE",
                }).then(() => {
                  router.push("/");
                  router.refresh();
                });
              }}
            >
              delete
            </button>
          </li>
        </>
      ) : null}
    </ul>
  );
}
