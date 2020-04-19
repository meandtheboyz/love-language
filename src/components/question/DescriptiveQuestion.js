import React from 'react'
import { updateInput } from "../../redux/actions";
import { connect } from "react-redux";

function DescriptiveQuestion({ question, dispatch }) {

  const onchange = (event) => {
    dispatch(updateInput({ [question]: event.target.value }))
  }

  return (
    <div className={`"text-question"`}>
      <div className="question-wrapper">
        <span className="question">{question}</span>
      </div>
      <div className="input-wrapper">
        <textarea placeholder="type your answer here..." onChange={onchange} className="textarea" rows="4" cols="60" />
      </div>
    </div>
  )
}


const mapStateToProps = state => ({ store: state.form })
export default connect(mapStateToProps)(DescriptiveQuestion);
  // export default AddTodo;
