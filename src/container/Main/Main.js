import React, { Component } from 'react';
import Container from '../../hoc/container';
import UserForm from '../../components/Form/UserForm';

class Main extends Component {
	render() {
		return (
			<React.Fragment>
				<Container>
					<UserForm />
				</Container>
			</React.Fragment>
		);
	}
}

export default Main;
