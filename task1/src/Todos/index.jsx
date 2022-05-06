import React from 'react';
import './styles.css';

const Todos = ({id, title, completed}) => {
  return (
    <div className="container">

        <h1 style={{textDecoration: 'underline', textAlign: 'center', marginBottom: '5px'}}>Task {id} </h1>
        <p><span style={{fontWeight: 'bold'}}>Title:</span> {title}</p>
        <p><span style={{fontWeight: 'bold'}}>Status:</span> {completed ? 'Done' : 'Not Finished'}</p>
    </div>
  )
}

export default Todos