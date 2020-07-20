import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from '../../hoc/container';
import classes from '../../shared/form.module.css';
// utilities

class Auth extends Component {
	state = {
		email: '',
		password: '',
		isSignup: true,
    };
    
    componentDidMount() {
        this.props.onSetAuthRedirectPath();
    }
    

	signupHandler = () => {
		this.setState((previousState) => {
			return { signin: !previousState.signin };
		});
	};

	emailChangedHander = (event) => {
		this.setState({ email: event.target.value });
	};
	passwordChangedHandler = (event) => {
		this.setState({ password: event.target.value });
	};

	onSubmitHandler = (event) => {
		event.preventDefault();
        this.props.onAuth(this.state.email, this.state.password, this.state.isSignup)
	};

	onLogin = () => {
		this.setState({ isSignup: false });
	};

	onSignup = () => {
		this.setState({ isSignup: true });
	};

    render() {

        let errorMessage = null;

        if ( this.props.error ) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        let authRedirect = null;
        if ( this.props.isAuthenticated ) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

		return (
            <Container>
                {authRedirect}
                {errorMessage}
				<Form className={classes.border} onSubmit={this.onSubmitHandler}>
					<Form.Group className={classes.margin} controlId='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type='email'
							placeholder='Enter email'
							onChange={this.emailChangedHander}
						/>
						<Form.Text className='text-muted'></Form.Text>
					</Form.Group>

					<Form.Group className={classes.margin} controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							onChange={this.passwordChangedHandler}
						/>
					</Form.Group>

					<Button
						className={classes.margin}
						variant='primary'
						type='submit'
						onClick={this.onLogin}>
						Sign in
					</Button>
					<Button
						className={classes.margin}
						variant='warning'
						type='submit'
						onClick={this.onSignup}>
						Sign up
					</Button>
				</Form>
			</Container>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.token !== null,
		authRedirectPath: state.auth.authRedirectPath,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onAuth: (email, password, signin) =>
			dispatch(actions.auth(email, password, signin)),
		onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/')),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
