import React from 'react';
import StreamCreate from '../components/streams/StreamCreate'
import StreamEdit from '../components/streams/StreamEdit'
import StreamDelete from '../components/streams/StreamDelete'
import StreamList from '../components/streams/StreamList'
import StreamShow from '../components/streams/StreamShow'
import Header from '../components/Header'
import { Route } from "react-router-dom";


function App(props) {
  return (
    <div className="ui container">
      <Header />
        <div>
          <Route exact path="/" component={StreamList} />
          <Route path="/stream/new" component={StreamCreate} />
          <Route path="/stream/edit" component={StreamEdit} />
          <Route path="/stream/delete" component={StreamDelete} />
          <Route path="/stream/show" component={StreamShow} />
        </div>
    </div>
  );
}

export default App;