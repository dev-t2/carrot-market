export default function Welcome({
  name,
}: Readonly<{
  name: string;
  age?: number;
}>) {
  return <h4>Hello, {name}</h4>;
}
