import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Button({ text, bgColor, color, hoverColor }) {
  const [hover, setHover] = useState(false);

  const style = {
    btn: {
      fontSize: '1.5rem',
      fontWeight: '600',
      textTransform: 'capitalize',
      color: `var(${color})`,
      backgroundColor: hover ? `var(${hoverColor})` : `var(${bgColor})`,
      padding: '1.2rem 2.4rem',
      textDecoration: 'none',
      display: 'inlineBlock',
      border: `1px solid var(${bgColor})`,
      borderRadius: '9px',
      transition: 'all 400ms ease',
    },
  };
  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={style.btn}
      to={'/'}
    >
      {text}
    </Link>
  );
}

export default Button;
