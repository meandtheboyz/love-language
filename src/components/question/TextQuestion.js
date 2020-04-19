import React from 'react'

export default ({ question }) => {
    return (
        <div className={`"text-question"`}>
            <div className="question-wrapper">
                <span className="question">{question}</span>
            </div>
            <div className="input-wrapper">
             <input type='text' className="text-input" />
            </div>
        </div>
    )
}