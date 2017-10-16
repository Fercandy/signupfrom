import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {addFlashMessage} from '../actions/flashMessages'
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
    class Authenticate extends Component {


        componentDidMount() {
            if (!this.props.isAuthenticated) {
                this.props.addFlashMessage({
                    type: 'error',
                    text: 'You need to login to access this page'
                });
                const location = {
                    pathname: '/login'
                    //state: { from: {pathname: '/Main'} }
                }
                this.props.history.push(location);
            }
        }
        
        componentDidUpdate(){
            if(!this.props.isAuthenticated){
                this.props.addFlashMessage({
                    type: 'error',
                    text: 'You need to login to access this page'
                });
                this.props.history.push('/login');
            }
        }
        
        render() {
            return (
                <ComposedComponent {...this.props} />
            )
        }
    }

    Authenticate.propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        addFlashMessage: PropTypes.func.isRequired
    }

    Authenticate.contextTypes = {
        router:PropTypes.object.isRequired
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.auth.isAuthenticated
        }
    }
    return connect(mapStateToProps, { addFlashMessage })(withRouter(Authenticate));
}
