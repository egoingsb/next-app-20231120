"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Control() {
  const params = useParams();
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
            <button>delete</button>
          </li>
        </>
      ) : null}
    </ul>
  );
}
