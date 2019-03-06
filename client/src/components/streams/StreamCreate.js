import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
    
    onSubmit = (formValue) => {
        this.props.createStream(formValue);
    };  

    render() {
        //console.log(this.props);
        //title and description connects with the validate function to show an error msg. 
        return (
                <div>
                    <h3>Create a Post</h3>
                    <StreamForm onSubmit={this.onSubmit} />
                </div>
           
        );
    }

}

//validation of form, if user inputs invalid title or description it will show an error msg 


//using connect component , we can send the data in to the db.json

export default connect (null,{ createStream})(StreamCreate);