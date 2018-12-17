import React from 'react'

import classes from './Modal.module.css';
import Auxy from '../../../hoc/Auxy';
import Backdrop from '../Backdrop/Backdrop'

function Modal(props) {
  return (
    <Auxy>
    <Backdrop show={props.show} clicked={props.modalClosed} />
      <div className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}>
        {props.children}
      </div>
    </Auxy>
  )
}

export default Modal
