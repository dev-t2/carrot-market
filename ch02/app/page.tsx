import { Heading, ItemList } from '@/components';

export default function Home() {
  const initialItems = ['HTML', 'CSS', 'JavaScript'];

  return (
    <div>
      <main className="flex flex-col p-4">
        <Heading />

        <ItemList initialItems={initialItems} />
      </main>
    </div>
  );
}
