import React from 'react';

function SecondaryHeading({ text, color }) {
  const style = {
    text: {
      color: `${color}`,
      fontSize: '3.4rem',
      fontWeight: '700',
    },
  };

  return <div style={style.text}>{text}</div>;
}

export default SecondaryHeading;
