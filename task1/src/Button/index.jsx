import React from 'react';
import './styles.css';

const Button = ({onClick, name}) => {
  return (
    <button onClick={onClick} className="btn" >{name}</button>
  )
}

export default Button