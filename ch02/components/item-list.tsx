'use client';

import { ChangeEvent, useCallback, useState } from 'react';

import Welcome from './welcome';

export default function ItemList() {
  const [items, setItems] = useState<string[]>([]);
  const [value, setValue] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onClick = useCallback(() => {
    setItems([...items, value]);
    setValue('');
  }, [items, value]);

  return (
    <div>
      <Welcome name="Next.js" />

      <h2 className="text-xl font-bold">웹 기본</h2>

      <h5 className="text-2xl font-bold">구성 요소</h5>

      <ul className="list-disc list-inside">
        <li>HTML</li>

        <li>JavaScript</li>

        <li>CSS</li>

        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>

      <input type="text" placeholder="항목을 추가해 주세요." value={value} onChange={onChange} />

      <button onClick={onClick}>추가하기</button>
    </div>
  );
}
