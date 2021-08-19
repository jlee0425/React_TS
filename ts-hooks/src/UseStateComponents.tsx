import React, { ReactElement, useState } from 'react';

export default function UseStateComponents (): ReactElement {
  const [arr, setArr] = useState<number[]>([]); // 타입이 정해지 않았을 경우 never[]
  const [name, setName] = useState<string | null>(null); // null을 default로 넣어둘 경우 null타입으로 한정됨.
  return (
    <div>
      <div>
        <button onClick={() => setArr([...arr, arr.length + 1])}>
          Add to array
        </button>
        {JSON.stringify(arr)}
      </div>
      <div>
        <button onClick={() => setName('Jake')}>Set name</button>
        {name}
      </div>
    </div>
  );
}
