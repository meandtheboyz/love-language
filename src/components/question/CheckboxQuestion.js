import React from 'react'
import Checkbox from '../checkbox'
import Radio from '../radio'
import { connect } from "react-redux";
import { updateInput } from "../../redux/actions";

function CheckboxQuesiton({ question, options, id, type, dispatch, store }) {

    const onRadioChange = (option) => {
        dispatch(updateInput({ [id]: { ...option } }))
    }

    const onCheckBoxChange = (option, value, toggle) => {
        let selected = { [id]: {...store[id], ...{ [option]: value }} }
        if (toggle)
            dispatch(updateInput(selected))
        else {
            let storeCopy = { ...store }
            if (storeCopy[id] && storeCopy[id][option]) {
                if(Object.keys(storeCopy[id]).length > 1)
                delete storeCopy[id][option]
                else 
                storeCopy[id] = null
            }
            dispatch(updateInput(storeCopy))
        }
    }


    return (
        <div className={`"check-question-"${id}`}>
            {console.log(store)}
            <div className="question-wrapper">
                <span className="question">{question}</span>
            </div>
            <div className="options">
                {
                    options && Object.keys(options).map(option => {
                        return type === 'radio'
                            ? <Radio onChange={onRadioChange} key={option} value={options[option]} option={option} name={id} />
                            : <Checkbox onChange={onCheckBoxChange} key={option} value={options[option]} option={option} name={id} />
                    })
                }
            </div>
        </div>
    )
}
const mapStateToProps = state => ({ store: state.form })
export default connect(mapStateToProps)(CheckboxQuesiton);
  
