import React from 'react';
import { Counter } from '../components/Counter';

export default () => {
  return (
    <div>
      <h1>Index page</h1>
      <h2>Counter 1</h2>
      <Counter initialCount={0} />
      <h2>Counter 2</h2>
      <Counter initialCount={10} />
    </div>
  );
};
