import React from 'react';
import ReactDOM from 'react-dom';
import './styles/common.scss';
import 'antd/dist/antd.css';
import './styles/theme.scss'
import App from './containers/App';
import Login from './containers/login/Login'
import * as serviceWorker from './serviceWorker';
// redux 
// init
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
// router
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// 异步
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
const loggerMiddleware = createLogger() // redux 运行的轨迹

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
