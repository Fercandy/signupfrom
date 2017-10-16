import React, {Component} from 'react';
import SignUpForm from '../containers/SignUpForm';
import {connect} from 'react-redux';
import {userSignUpRequest} from '../actions/signupActions';
import PropTypes from 'prop-types';

class SignUpPAge extends Component {
    render(){
        const {userSignUpRequest} = this.props;
        return (

            <div className="row">
                <div className="col-sm-4 col-sm-offset-4">
                    <SignUpForm userSignUpRequest = {userSignUpRequest}/>
                </div>
            </div>
        );
    }

}
//SignUpPage.propTypes = {
//    userSignUpRequest: PropTypes.func.isRequired
//}
const mapStateToProps = state => {
  return {
    register_errors: state.auth.errors.register_errors
  };
};



export default connect(mapStateToProps, {userSignUpRequest})(SignUpPAge);