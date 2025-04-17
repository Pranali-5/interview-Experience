import React from 'react'
import classes from './Modal.module.css'
const Modal = ({open, handleClose}) => {
if(!open) return null
  return (
    <div className={classes.overlay}>
        <div className={classes.modal}>
            <h2>
                Modal Content
            </h2>
            <button onClick={handleClose}>Close Modal</button>
        </div>
        
    </div>
  )
}

export default Modal