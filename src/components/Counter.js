import React, { useState } from 'react';

export const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <div>今のカウントは {count} です。</div>
      <button onClick={() => setCount(count + 1)}>カウントを増やす</button>
      <button onClick={() => setCount(count - 1)}>カウントを減らす</button>
    </div>
  );
};
