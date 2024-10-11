export default function Welcome({
  name,
}: Readonly<{
  name: string;
  age?: number;
}>) {
  return <h2>Hello, {name}</h2>;
}
