import React from 'react';
import questionBank from './../data/questions'
import questionsHelper from '../helper/questionsHelper';
import './../styles/form.sass'
function Questions() {
    return (
        <div className="questions-wrapper">
            {
                Object.keys(questionBank.questions).map(question => questionsHelper(questionBank.questions[question], question) )
            }
        </div>
    );
}

export default Questions;
