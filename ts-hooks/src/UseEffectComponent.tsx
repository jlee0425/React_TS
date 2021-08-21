import React, { ReactElement, useEffect, useState } from 'react';

export default function UseEffectComponent (): ReactElement {
  const [val, setVal] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVal(v => v + 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return <div>{val}</div>;
}
