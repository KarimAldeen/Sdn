import React from 'react'

const BtnLung = () => {
    return (
        <center className='BtnLung'>
            <div className="switch">
                <input
                    id="language-toggle"
                    className="check-toggle check-toggle-round-flat"
                    type="checkbox"
                />
                <label htmlFor="language-toggle" />
                <span className="on">AR</span>
                <span className="off">EN</span>
            </div>
        </center>

    )
}

export default BtnLung