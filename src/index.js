import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import requireAuth from './components/require_authentication';
import App from './components/app';
import reducers from './reducers';
import Resources from './components/resources';
import UserList from './components/users';
import {Router,Route,browserHistory} from 'react-router';
import Async from './middlewares/async';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/resources" component={requireAuth(Resources)}></Route>
      </Route>
      <Route path="/users" component={UserList}></Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
