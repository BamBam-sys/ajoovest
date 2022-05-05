import React from 'react';

function TertiaryHeading({ text, color }) {
  const style = {
    text: {
      color: `${color}`,
      fontSize: '2.5rem',
      fontWeight: '600',
    },
  };
  return <div style={style.text}>{text}</div>;
}

export default TertiaryHeading;
