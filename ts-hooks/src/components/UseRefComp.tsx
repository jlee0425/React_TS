import React, { ReactElement } from 'react';
import { useRef } from 'react';

function UseRefComp (): ReactElement {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div>
      <input type='text' ref={inputRef} />
    </div>
  );
}

export default UseRefComp;
