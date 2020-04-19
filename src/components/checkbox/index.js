import React, { useState } from 'react'

export default ({ name, value }) => {

    const [checked, checkIt] = useState(false)

    const toggleCheck = () => {
        checkIt(!checked)
    }

    return (
        <div className="checkbox-wrapper">
            <input id={`${value}-check`} name={name} onChange={toggleCheck} type="checkbox" ></input>
            <label htmlFor={`${value}-check`}>
                <span className={`checkbox ${checked ? 'checked' : ''}`}>
                    <span className={"checked"}></span>
                </span>
                <span className="label">{value}</span>
            </label>
        </div>
    )
}