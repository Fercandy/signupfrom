import React, {Component} from 'react';
import TextFieldGroup from '../common/TextFieldGroup'




class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: '',
            isLoading: false
        }
    }
    onChangeInput(event) {
        this.setState ({
            [event.target.name]: event.target.value
        })
    }
    onSubmitBtn(e){
        e.preventDefault();
        this.props.userLoginRequest(this.state);
    }

    render(){
        const {email,password,errors, isLoading } = this.state;
        return(
        <form onSubmit={(e) => this.onSubmitBtn(e)} action="">
            <h1>Login Form</h1>
            <TextFieldGroup
                field="email"
                label="Username/Email"
                value={email}
                error={errors.identifier}
                onChange={(event)=> this.onChangeInput(event)}
                />
                <TextFieldGroup
                    field="password"
                    label="password"
                    value={password}
                    error={errors.password}
                    onChange={(event)=> this.onChangeInput(event)}
                    />

            <div className="form-group">
                <button
                    className="btn btn-primary"
                    disabled={isLoading}
                    >
                    Login
                </button>
            </div>
        </form>

        )
    }
}

export default LoginForm;