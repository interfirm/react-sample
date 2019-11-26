import React, { useState } from 'react';
import { Counter } from '../components/Counter';
import { Counter2 } from '../components/Counter2';
import { Headline } from '../components/Headline';
import { Headline2 } from '../components/Headline2';

export default () => {
  const [counter, setCounter] = useState(
    0
  );
  const handleChangeCounter = num => setCounter(num);
  const handleInputCounter = event => setCounter(Number(event.target.value));

  const [headline, setHeadline] = useState(
    'Hello'
  );
  const handleChangeHeadline = event => setHeadline(event.target.value);

  return (
    <div>
      <h1>Index page</h1>
      <h2>Counter</h2>
      <Counter initialCount={0} />
      <h2>Counter 2</h2>
      <Counter2 counter={counter} onChangeCounter={handleChangeCounter} inputCounter={handleInputCounter} />

      <Headline headline={headline} onChangeHeadline={handleChangeHeadline} />
      <Headline2 initialHeadline={"test"} />
    </div>
  );
};
