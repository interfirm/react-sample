import React from 'react';

export const Headline = ({ headline, onChangeHeadline }) => {
  return (
    <div>
      <h3>{headline}</h3>
      <input style={{width: "300px"}} type="text" value={headline} onChange={onChangeHeadline} />
    </div>
  );
};
