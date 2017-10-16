import axios from 'axios';
import {LOGIN} from '../common/types';


export function userLoginRequest(data){
    return dispatch => {
        axios.post('http://138.68.87.218:8091/api/auth/login', {
            email: data.email,
            password: data.password
        }).then(response =>{
            dispatch({
                type: LOGIN,
                payload: response
            })
        })

    }
}
