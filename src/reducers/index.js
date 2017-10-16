import {combineReducers} from 'redux';
import flashMessages from './flashMessages';
import Auth from './auth';

export default  combineReducers ({
    flashMessages,
    auth: Auth

})