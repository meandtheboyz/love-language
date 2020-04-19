import React from 'react'

export default ({ question, id, type }) => {
    return (
        <div className={`"text-question"`}>
            <div className="question-wrapper">
                <span className="question">{question}</span>
            </div>
            <div className="input-wrapper">
             <textarea className="textarea" rows="4" cols="60" />
            </div>
        </div>
    )
}