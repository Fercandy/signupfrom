import React, {Component} from 'react';
import SignUpPage from '../components/SignUpPage';
import LoginPage from '../components/LoginPage';
import InnerPage from '../components/InnerPage';


class LaunchScreen extends Component {
    render(){
        return (

            <div className="row">
                <div className="col-sm-12">
                    <SignUpPage />
                    <LoginPage/>
                    <InnerPage/>
                </div>
            </div>
        );
    }

}



export default LaunchScreen;
