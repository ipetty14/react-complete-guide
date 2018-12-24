import React from 'react';
import './Person.css';

const person = props => {
  
  return (
    <div style={styles}>
      <h3 onClick={props.click}>
        <u>
          I am {props.name} and I am {props.age} years old!
        </u>
      </h3>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} placeholder={props.name} />
    </div>
  );
};

export default person;
