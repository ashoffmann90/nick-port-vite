import React from 'react'

const Backdrop = ({ show, modalHandler }) =>
    show ? <div className="backdrop" onClick={modalHandler}></div> : null

export default Backdrop
