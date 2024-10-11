'use client';

import { ChangeEvent, useCallback, useState } from 'react';

export default function ItemList({
  initialItems,
}: Readonly<{
  initialItems: string[];
}>) {
  const [items, setItems] = useState(initialItems);
  const [value, setValue] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onClick = useCallback(() => {
    setValue('');
    setItems([...items, value]);
  }, [items, value]);

  return (
    <div>
      <ul className="list-disc list-inside">
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>

      <input type="text" placeholder="항목을 추가해 주세요." value={value} onChange={onChange} />

      <button onClick={onClick}>추가하기</button>
    </div>
  );
}
