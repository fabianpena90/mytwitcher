import React from 'react';
import { connect } from 'react-redux'

function StreamEdit(props) {
  console.log(props)
  return (
    <div>
      StreamEdit
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps)(StreamEdit);