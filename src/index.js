import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import jwt from "jsonwebtoken";
import { setCurrentUser } from "./actions/auth"
import setAuthorizationToken from "./components/auth";
import reducers from './reducers/index';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const createHistory = require("history").createBrowserHistory;
export const history = createHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

if (window.localStorage.token) {
  setAuthorizationToken(window.localStorage.token);
  var token = jwt.decode(window.localStorage.token);
  store.dispatch(setCurrentUser(token))
}

const jsx = (
  <BrowserRouter history={history}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(jsx, document.getElementById('root'));

serviceWorker.register()
