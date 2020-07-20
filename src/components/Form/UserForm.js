import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import classes from './form.module.css';
import * as actions from '../../store/actions/index';
class UserForm extends Component {
	state = {
		costName: '',
		supplier: '',
		baseCostUnit: '',
		unitPrice: '',
		qtyPerOneBag: '',
		costPerOneBag: '',
	};

	componentDidMount() {
		this.props.onStartSubmitData()
	}
	

	costNameChangedHandler = (event) => {
		this.setState({ costName: event.target.value });
	};

	supplierChangedHandler = (event) => {
		this.setState({ supplier: event.target.value });
	};

	baseCostUnitChangedHandler = (event) => {
		this.setState({ baseCostUnit: event.target.value });
	};

	unitPriceChangedHandler = (event) => {
		const eventVal = event.target.value;
		this.setState((previousState) => {
			return {
				unitPrice: eventVal,
				costPerOneBag: previousState.qtyPerOneBag
					? previousState.qtyPerOneBag * eventVal
					: '',
			};
		});
	};

	qtyPerOneBagChangedHandler = (event) => {
		event.persist();
		this.setState((previousState) => {
			return {
				qtyPerOneBag: event.target.value,
				costPerOneBag: previousState.unitPrice
					? previousState.unitPrice * event.target.value
					: '',
			};
		});
	};

	onSubmitHandler = async (event) => {
		event.preventDefault();

		if (!this.props.isAuthenticated) {
			this.props.history.push('/auth');
		} else {
			const toSubmit = {
				dataValues: { ...this.state },
				userId: this.props.userId,
			};
			this.props.onSubmitData(toSubmit, this.props.token);
			this.props.onSubmitDataSuccess()
		}
	};

	render() {
		return (
			<Form className={classes.border} onSubmit={this.onSubmitHandler}>
				<Form.Group className={classes.margin} controlId='costName'>
					<Form.Label>Cost name</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter cost name'
						value={this.state.costName}
						onChange={this.costNameChangedHandler}
					/>
				</Form.Group>

				<Form.Group className={classes.margin} controlId='supplier'>
					<Form.Label>Supplier</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter supplier'
						value={this.state.supplier}
						onChange={this.supplierChangedHandler}
					/>
				</Form.Group>

				<Form.Group className={classes.margin} controlId='baseCostUnit'>
					<Form.Label>Base cost unit</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter base cost unit'
						value={this.state.baseCostUnit}
						onChange={this.baseCostUnitChangedHandler}
					/>
				</Form.Group>

				<Form.Group className={classes.margin} controlId='UnitPrice'>
					<Form.Label>Unit price {this.state.productName}</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter unit price'
						value={this.state.unitPrice}
						onChange={this.unitPriceChangedHandler}
					/>
				</Form.Group>

				<Form.Group className={classes.margin} controlId='qtyPerOneBag'>
					<Form.Label>Quantity per 1 Bag</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter cost per one bag'
						value={this.state.qtyPerOneBag}
						onChange={this.qtyPerOneBagChangedHandler}
					/>
				</Form.Group>

				<Form.Group className={classes.margin} controlId='costPerOneBag'>
					<Form.Label>Cost per 1 Bag</Form.Label>
					<Form.Control disabled type='text' value={this.state.costPerOneBag} />
				</Form.Group>

				<Button variant='primary' type='submit' style={{ marginBottom: '2%' }}>
					Submit
				</Button>
				{this.props.finished
					? <Alert variant='success'> Successfully submited</Alert> 
					: null
				}

			</Form>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.token !== null,
		token: state.auth.token,
		userId: state.auth.userId,
		finished: state.data.finished
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmitData: (data, token) => dispatch(actions.submitData(data, token)),
		onSubmitDataSuccess: () => dispatch(actions.submitDataSuccess()),
		onStartSubmitData: () => dispatch(actions.startSubmitData())
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(UserForm)
);
