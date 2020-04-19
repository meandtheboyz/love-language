import React, { useState } from 'react'

export default ({ name, value, option, onChange }) => {

    const [checked, checkIt] = useState(false)

    const toggleCheck = (event) => {
        onChange(option, value, event.target.checked)
        checkIt(!checked)
    }

    return (
        <div className="checkbox-wrapper">
            <input id={`${name}-${value}-check`} name={name} onChange={toggleCheck} type="checkbox" ></input>
            <label htmlFor={`${name}-${value}-check`}>
                <span className={`checkbox ${checked ? 'checked' : ''}`}>
                    <span className={"checked"}></span>
                </span>
                <span className="label">{value}</span>
            </label>
        </div>
    )
}