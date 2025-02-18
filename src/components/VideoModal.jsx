import React from 'react'
import Backdrop from './Backdrop'

function VideoModal({ children, show, modalHandler }) {
    return (
        <>
            <Backdrop show={show} modalHandler={modalHandler} />
            <div
                className="modal"
                style={{
                    margin: '0 auto',
                    transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                    opactiy: show ? 1 : 0,
                }}
            >
                {children}
            </div>
        </>
    )
}

export default VideoModal
