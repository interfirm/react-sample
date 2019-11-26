import React from 'react';

export const Headline = ({ headline, onChangeHeadline }) => {
  return (
    <div>
      <h2>Headline : {headline}</h2>
      <input style={{width: "300px", display: "block"}} type="text" value={headline} onChange={onChangeHeadline} />
    </div>
  );
};
