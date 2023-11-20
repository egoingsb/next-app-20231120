type UpdateProps = {
  params: {
    id: string;
  };
};
export default function Update({ params: { id } }: UpdateProps) {
  return <div>Update {id}</div>;
}
