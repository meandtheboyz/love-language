import React, { useState } from 'react'

const Radio = ({ name, value }) => {

    const [checked, checkIt] = useState('')
    const toggleCheck = (value) => {
        console.log('tetc')
        checkIt(value)
    }

    return (
        <div className="radio-wrapper">
            <input id={`${value}-radio`} name={name} onChange={() => toggleCheck(value)} type="radio" ></input>
            <label htmlFor={`${value}-radio`}>
                <span className={`radio`}>
                    <span className={"checked"}></span>
                </span>
                <span className="label">{value}</span>
            </label>
        </div>
    )
}

export default Radio