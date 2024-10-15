'use client';

import { useCallback, useEffect, useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    setMessages((prevState) => [...prevState, '마운트']);

    console.log('마운트');

    return () => {
      setMessages((prevState) => [...prevState, '언마운트']);

      console.log('언마운트');
    };
  }, []);

  useEffect(() => {
    setMessages((prevState) => [...prevState, `카운트: ${count}`]);

    console.log(`카운트: ${count}`);
  }, [count]);

  const onClick = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="mb-4 w-80 h-40 p-2 overflow-auto border border-gray-300">
        {messages.map((message, index) => {
          return (
            <p key={index} className="text-sm text-gray-700">
              {message}
            </p>
          );
        })}
      </div>

      <div className="flex flex-col items-center">
        <p className="mb-2 text-lg font-bold">카운트: {count}</p>

        <button
          className="px-4 py-2 bg-blue-500 font-semibold text-white hover:bg-blue-700"
          onClick={onClick}
        >
          증가
        </button>
      </div>
    </div>
  );
}
