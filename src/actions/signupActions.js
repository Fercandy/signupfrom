import axios from 'axios';
import {
	SIGN_UP,
    REGISTER_ERROR,
    RESET_AUTH_ERRORS
} from '../common/types';


export function userSignUpRequest(data){
    return dispatch => {
        axios.post('http://138.68.87.218:8091/api/auth/register', {
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirm,
        }).then(response =>{
            dispatch({
                type: SIGN_UP,
                payload: response
            })
            dispatch({
					type : RESET_AUTH_ERRORS
				}).catch(err => {
				dispatch({
					type : REGISTER_ERROR,
					payload : err.data.errors
				})
			}) 
        })

    }
}

