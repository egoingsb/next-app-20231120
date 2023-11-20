type ReadProps = {
  params: {
    id: string;
  };
};
export default function Read(props: ReadProps) {
  return <div>Read {props.params.id}</div>;
}
