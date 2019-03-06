import React from 'react';
import { Field, reduxForm } from 'redux-form';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

class StreamForm extends React.Component {
    //if user leave input text blank it show an error
    renderError({ error, touched }) {
        if (error && touched) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    //helper function for input type and use of destructuring
    renderInput = ({ input, label, meta }) => {
        console.log(meta);
        //if user leave the input field empty than it will show an error msg
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
        
    }

    //for submit form creating helper method and redux prop(handleSubmit)
    onSubmit = (formValue) => {
        this.props.onSubmit(formValue);
    }

    render() {
        //console.log(this.props);
        //title and description connects with the validate function to show an error msg. 
        return (

            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"
            >

                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }

}

//validation of form, if user inputs invalid title or description it will show an error msg 

const validate = formValue => {
    const error = {};

    if (!formValue.title) {
        error.title = 'You must enter a title';
    }
    if (!formValue.description) {
        error.description = 'You must enter a description';
    }
    return error;
};
//using connect component , we can send the data in to the db.json
export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);

