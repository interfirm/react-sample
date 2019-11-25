import React, { useState } from 'react';

export const Counter2 = ({ counter, onChangeCounter, inputCounter }) => {
  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={() => onChangeCounter(counter + 1)}>カウントを増やす</button>
      <button onClick={() => onChangeCounter(counter - 1)}>カウントを減らす</button>
      <input style={{width: "300px", display: "block"}} type="text" value={counter} onChange={inputCounter} />
    </div>
  );
};
