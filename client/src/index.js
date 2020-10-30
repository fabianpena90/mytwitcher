import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import reduxThunk from 'redux-thunk'

import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //REDUX DEVTOOLS WITH GOOGLE CHROME
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
document.getElementById('root'))