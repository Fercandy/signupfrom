import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/index';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtensions ? window.devToolsExtensions() : f => f
    )
);


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
            <ul>
                <li><Link to="/signup">Sign up</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            <Route path="/signup" component={SignUpPage}/>
            <Route path="/login" component={LoginPage}/>
            </div>
        </Router>
   
    </Provider>
    , document.getElementById('root'));

