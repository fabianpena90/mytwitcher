import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import reduxThunk from 'redux-thunk'
import history from './history' // all the internal history for the app

import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //REDUX DEVTOOLS WITH GOOGLE CHROME
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
)
// Changed from browserrouter to router in order to use history
ReactDOM.render(
  <Router history={history}> 
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
document.getElementById('root'))