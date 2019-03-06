import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchStreams} from '../../actions';

class StreamList extends React.Component {
    componentDidMount(){
        this.props.fetchStreams();
    }

    //show the edit and delete buttons
    renderAdmin(stream){
        if(stream.userId === this.props.currentUserId){
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
                </div>
            );
        }
    }


    renderList(){
    
        return this.props.streams.map(stream => {
            return(
            <div className="item" key={stream.id}>
                {this.renderAdmin(stream)}
                <div className="item" key={stream.title}>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                         <Link to={`/streams/${stream.id}`} className="header">
                             {stream.title}
                         </Link>
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            </div>
            ); 
        });
    }

    //show the Stream Create button
    renderCreate(){
        if(this.props.isSignedIn){
            return(
                <div style={{textAlign: 'right'}}>
                    <Link to="/streams/new" className="ui button primary">Create Post</Link>
                </div>
            );
        }

    }

    render(){
        //console.log(this.props.streams);
        return(
            <div>
                <h2>All Posts</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        );
    }
    
};

const mapStateToProps = (state) => {
    return{ 
        streams: Object.values(state.streams),
        currentUserId : state.auth.userId,
        isSignedIn : state.auth.isSignedIn
    };
};

export default connect(mapStateToProps,{ fetchStreams}) (StreamList);