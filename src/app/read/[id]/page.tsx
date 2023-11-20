type ReadProps = {
  params: {
    id: string;
  };
};
export default async function Read(props: ReadProps) {
  const res = await fetch("http://localhost:9999/posts/" + props.params.id);
  const post = await res.json();
  return (
    <div>
      <h2>{post.title}</h2>
      {post.body}
    </div>
  );
}
