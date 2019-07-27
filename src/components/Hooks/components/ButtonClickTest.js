import React, { useState, useEffect } from 'react';
import getCount from '../functions/geCount'
export default function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  let count1 = getCount();
  return (
    <div>
      <p>You clicked {count1} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}