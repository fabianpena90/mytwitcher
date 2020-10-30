import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import {fetchStreams} from '../../actions'
import { Link } from 'react-router-dom'

function StreamList(props) {

  useEffect(() => {
    props.fetchStreams();
  }, [])

  function deleteAndEdit(stream){
    if(stream.userId === props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
          <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
        </div>
      )
    }
  }
  
  function streamList() {
    return (
      props.streams.map(stream => {
        return (
          <div className="item" key={stream.id}>
            {deleteAndEdit(stream)}
            <i className="large middle aligned icon camera" />
            <div className="content">
              {stream.title}
              <div className="description">{stream.description}</div>
            </div>
          </div>
        )
      })
    )
  }

  function create() {
    if(props.isSignedIn) {
      return (
        <div style={{textAlign: 'right'}}>
          <Link to="/stream/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      )
    }
  }

  return (
    <div>
    <h2>Streams</h2>
      <div className="ui celled list">{streamList()}</div>
      {create()}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    streams: Object.values(state.streams), // Object.values transform an object into an array
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);