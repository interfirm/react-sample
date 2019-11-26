import React, { useState } from 'react';

export const Headline2 = ({ initialHeadline }) => {
  const [headline, setHeadline] = useState(initialHeadline);
  return (
    <div>
      <h2>Headline2: {initialHeadline}</h2>
      <input
        style={{width: "300px", display: "block"}}
        type="text"
        value={headline}onChange={(e) => setHeadline(e.target.value)}
      />
    </div>
  );
};
