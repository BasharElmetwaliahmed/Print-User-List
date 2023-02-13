import React from 'react';
import classStyles from './Card.module.css';

function Card({children,className}) {
  return (
    <div className={`${classStyles.card } ${className}`}>{children}</div>
  )
}

export default Card