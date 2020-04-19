import React from 'react'
import { updateInput } from "../../redux/actions";
import { connect } from "react-redux";

function TextQuestion ({ question, dispatch }) {
    const onchange = (event) => {
        dispatch(updateInput({ [question]: event.target.value }))
    }

    return (
        <div className={`"text-question"`}>
            <div className="question-wrapper">
                <span className="question">{question}</span>
            </div>
            <div className="input-wrapper">
             <input placeholder="your answer..." onChange={onchange} type='text' className="text-input" />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({ store: state.form })
export default connect(mapStateToProps)(TextQuestion);
  // export default AddTodo;
