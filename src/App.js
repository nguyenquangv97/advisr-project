import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

import Main from './container/Main/Main';
import Auth from './container/auth/Auth';
import Logout from './container/auth/Logout/Logout';
import DataTable from './components/Table/DataTable';
import Software from './components/Software/Software';
import Welcome from './container/Welcome';
import './App.css';

class App extends Component {
	componentDidMount() {
		this.props.onTryAutoSignup();
	}

	render() {
		let routes = (
			<Switch>
				<Route path='/auth' component={Auth} />
				<Route path='/software' component={Auth} />
				<Route path='/' exact component={Welcome} />
				<Redirect to='/' />
			</Switch>
		);
		if (this.props.isAuthenticated) {
			routes = (
				<Switch>
					<Route path='/logout' component={Logout} />
					<Route path='/auth' component={Auth} />
					<Route path='/data' component={DataTable} />
					<Route path='/software' component={Software} />
					<Route path='/' exact component={Welcome} />
					<Redirect to='/' />
				</Switch>
			);
		}
		return <div className='App'>{routes}</div>;
	}
}
const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.token !== null,
		token: state.auth.token,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onTryAutoSignup: () => dispatch(actions.authCheckState()),
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
