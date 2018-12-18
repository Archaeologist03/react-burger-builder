import React from 'react';
import classes from './Button.module.css';

function button(props) {
  return (
    <div>
      <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}
      >
        {props.children}
      </button>
    </div>
  );
}

export default button;
