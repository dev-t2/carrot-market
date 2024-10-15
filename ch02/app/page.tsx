import { Heading, ItemList } from '@/components';

export default function HomePage() {
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
