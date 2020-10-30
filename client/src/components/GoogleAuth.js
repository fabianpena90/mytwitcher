import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import {signIn, signOut} from '../actions'

function GoogleAuth(props) {

  useEffect(() =>{
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '564507930030-hkv35kvem2r4ra3bikh61mad7j3k9p85.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        const auth = window.gapi.auth2.getAuthInstance();
        onAuthChange(auth.isSignedIn.get())
        auth.isSignedIn.listen(onAuthChange)
      })
    });
  },[])

  const onAuthChange = (isSignedIn) =>{
    const auth = window.gapi.auth2.getAuthInstance();
    if (isSignedIn) {
      props.signIn(auth.currentUser.get().getId())
    } else {
      props.signOut()
    }
  }

  const onSignInClick = () => {
    const auth = window.gapi.auth2.getAuthInstance();
    auth.signIn()
  }

  const onSignOutClick = () => {
    const auth = window.gapi.auth2.getAuthInstance();
    auth.signOut()
  }

  function signIn() {
    if(props.isSignedIn === null) {
      return null
    } else if (props.isSignedIn) {
      return <button onClick={onSignOutClick} className="ui red google button">
        <i className="google icon" />
        Sign Out
      </button>
    } else {
      return <button onClick={onSignInClick} className="ui green google button">
      <i className="google icon" />
      SignIn with Google
    </button>
    }
  }

  
  return (
    <div>
      {signIn()}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}
// eslint-disable-next-line no-undef
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);