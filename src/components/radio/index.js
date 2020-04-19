import React, { useState } from 'react'

const Radio = ({ name, value, option, onChange }) => {

    const [checked, checkIt] = useState('')

    const toggleCheck = (value, option) => {
        checkIt(value)
        onChange({[option]: value})
    }

    return (
        <div className="radio-wrapper">
            <input id={`${name}-${value}-radio`} name={name} onChange={() => toggleCheck(value, option )} type="radio" ></input>
            <label htmlFor={`${name}-${value}-radio`}>
                <span className={`radio`}>
                    <span className={"checked"}></span>
                </span>
                <span className="label">{value}</span>
            </label>
        </div>
    )
}

export default Radio