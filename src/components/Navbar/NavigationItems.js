import React, { Component } from 'react';
import { connect } from 'react-redux'
import Nav from 'react-bootstrap/Nav';
import { withRouter } from 'react-router-dom';
import classes from './navigationItems.module.css';

class navigationItem extends Component {
	render() {
		return (
			<Nav
				className={classes.middle}
				activeKey='/'
				onSelect={(selectedKey) => {
					switch (selectedKey) {
						case 'home':
							this.props.history.push('/');
							break;
						case 'login':
							this.props.history.push('/auth');
							break;
						case 'logout':
							this.props.history.push('/logout');
							break;
						case 'data':
							this.props.history.push('/data');
							break;
						default:
							this.props.history.push('/');
					}
				}}>
				{this.props.token ? (
					<Nav.Item>
						<Nav.Link eventKey='home'>Home</Nav.Link>
					</Nav.Item>
				) : null}

				<Nav.Item>
					{this.props.isAuthenticated ? (
						<Nav.Link eventKey='logout'>Logout</Nav.Link>
					) : (
						<Nav.Link eventKey='login'>Login</Nav.Link>
					)}
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey='data'>View data</Nav.Link>
				</Nav.Item>
			</Nav>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		token: state.auth.token,
	};
};

export default withRouter(connect(mapStateToProps)(navigationItem));
