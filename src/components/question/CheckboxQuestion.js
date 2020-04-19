import React from 'react'
import Checkbox from '../checkbox'
import Radio from '../radio'


export default ({ question, options, id, type }) => {
    return (
        <div className={`"check-question-"${id}`}>
            <div className="question-wrapper">
                <span className="question">{question}</span>
            </div>
            <div className="options">
                {
                    options && Object.keys(options).map(option => {
                        return type==='radio'
                        ? <Radio key={option} value={options[option]} name={id}/>
                        : <Checkbox key={option} value={options[option]} name={id} />
                    })
                }
            </div>
        </div>
    )
}