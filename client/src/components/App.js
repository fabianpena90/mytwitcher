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
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit/:id" component={StreamEdit} />
          <Route path="/streams/delete/:id" component={StreamDelete} />
          <Route path="/streams/show/:id" component={StreamShow} />
        </div>
    </div>
  );
}

export default App;