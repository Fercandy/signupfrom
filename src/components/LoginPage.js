import React, {Component} from 'react';
import LoginForm from '../containers/LoginForm';
import {connect} from 'react-redux';
import {userLoginRequest} from '../actions/loginActions';


class LoginPage extends Component {
    render(){
        const {userLoginRequest} = this.props;
        return (

            <div className="row">
                <div className="col-sm-4 col-sm-offset-8">
                    <LoginForm userLoginRequest = {userLoginRequest}/>
                </div>
            </div>
        );
    }

}




export default connect(null, {userLoginRequest}) (LoginPage);