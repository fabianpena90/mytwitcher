import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { createStream} from '../../actions'

function StreamCreate(props) {

  function handleInput(formProps){

    function handleError(formProps){
      if(formProps.touched && formProps.error) { //touched, error, meta are props from redux forms (formProps)
        return (
          <div className="ui error message">
            <div className="header">{formProps.error}</div>
          </div>
        )
      } 
    }

    const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : "''"}`

    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off"/>
        {handleError(formProps.meta)}
      </div>
    )
  }

  function onSubmit(formValues) {
    props.createStream(formValues);
  }

  return (
    <div>
      <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error"> 
        <Field name="title" component={handleInput} label="Enter Title"/>
        <Field name="description" component={handleInput} label="Enter Description"/>
        <button className="ui button primary">Submit</button>
      </form>
    </div>
  );
}

// 
function validate (formValues){
  const errors = {};

  if(!formValues.title) {
    errors.title = "You must enter a title"
  }

  if(!formValues.description) {
    errors.description = "You must enter a description"
  } 

  return errors
}


const formWrap = reduxForm({form: 'myTwitcher',validate})(StreamCreate);
export default connect(null, {createStream})(formWrap)