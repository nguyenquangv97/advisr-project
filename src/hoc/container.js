import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import NavigationItems from '../components/Navbar/NavigationItems';
class UIContainer extends Component {
	render() {
		return (
			<React.Fragment>
				<Container>
					<NavigationItems isAuthenticated={this.props.isAuthenticated} />
					<Row className='justify-content-md-center'>{this.props.children}</Row>
				</Container>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.token !== null,
	};
};

export default connect(mapStateToProps)(UIContainer);
