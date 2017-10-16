import React, {Component} from 'react';

import PropTypes from 'prop-types';

class SignUpForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            password_confirm: '',
            errors: {
                fields_arr: ''
            }
        }

    }


    onChangeInput(event) {
        this.setState ({
            [event.target.name]: event.target.value
        })
    }

    onSubmitBtn(e){
        e.preventDefault();
      this.props.userSignUpRequest(this.state);
    }
        render()  {
            return (
                <form onSubmit={(e) => this.onSubmitBtn(e)}>
                    <h1>SignUpForm</h1>

                    <div className="form-group">

                        <label className="control-label">Email</label>
                        <input
                            value={this.state.email}
                            type="email"
                            name="email"
                            className="form-control"
                            required
                            onChange={(event)=> this.onChangeInput(event)}
                            />
                        
                        <label className="control-label">Password</label>
                        <input
                            value={this.state.password}
                            type="password"
                            name="password"
                            className="form-control"
                             required
                            onChange={(event)=> this.onChangeInput(event)}
                            />

                        <label className="control-label">Password Confirmation</label>
                        <input
                            value={this.state.password_confirm}
                            type="password"
                            name="password_confirm"
                            className="form-control"
                            onChange={(event)=> this.onChangeInput(event)}
                             required
                            />
                            <span>{this.state.errors.fields_arr}</span>
                    </div>

                    <div className="form-group">
                        <button
                            className="btn btn-primary"
                            >
                            Sign Up
                        </button>
                    </div>
                </form>
            )
        }
    }

SignUpForm.propTypes = {
    userSignUpRequest: PropTypes.func.isRequired
}

  export default  SignUpForm;
