import {LOGIN, RESET_AUTH_ERRORS, REGISTER_ERROR} from '../common/types';

const initialState = {
    isAuthenticated: null,
    errors: {
		login_errors: {},
		register_errors: {},
		change_password_errors : {},
		update_user_errors : {}
	}
};

export default function Auth (state = initialState, action) {
    console.log('Action recieved', action);   //takes the action
const set_errors = (error_name) => {
		return Object.assign({}, state, {errors : Object.assign({},state.errors,{
				[error_name] : action.payload
		})})
	}
    switch (action.type) {
        case LOGIN:
            return [action.payload, ...state];
        case RESET_AUTH_ERRORS:
			return Object.assign({},state,{
				errors : initialState.errors
			})

		case REGISTER_ERROR:
			return set_errors('register_errors')
        default:
            return state;
    }


}


