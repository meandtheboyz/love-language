import React from 'react'
import CheckboxQuestion from "../components/question/CheckboxQuestion"
import DescriptiveQuestion from '../components/question/DescriptiveQuestion'
import TextQuestion from '../components/question/TextQuestion'

export default function (question, id) {
    switch (question.type) {
        case 'checkbox':
        case 'radio':
            return <CheckboxQuestion key={id} type={question.type} question={question.phrase} id={id} options={question.options} />
        case 'descriptive':
            return <DescriptiveQuestion key={id} type={question.type} question={question.phrase} />
        case 'text':
           return <TextQuestion question={question.phrase}  />
        default:
            return <div key={id}></div>
    }
}