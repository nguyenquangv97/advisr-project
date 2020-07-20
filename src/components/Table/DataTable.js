import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import * as actions from '../../store/actions/index';
import Container from '../../hoc/container';

import TableItem from './TableItem';

const dataName = [
	'costName',
	'supplier',
	'baseCostUnit',
	'unitPrice',
	'qtyPerOneBag',
	'costPerOneBag',
];

class DataTable extends Component {
	async componentDidMount() {
		// init the app
		if (!this.props.token) {
			this.props.history.push('/auth');
		} else {
			this.props.onFetchData(this.props.token, this.props.userId);
		}
	}
	render() {
		let data = this.props.data.map((data) => (
			<TableItem
				key={data.id}
				dataValues={data.dataValues}
				dataName={dataName}
			/>
		));

		const dataPresent = this.props.data[this.props.data.length-1]

		return (
			<Container>
				<Table responsive='md' variant='dark'>
					<thead>
						<tr>
							<th>Cost name</th>
							<th>Supplier</th>
							<th>Base cost unit</th>
							<th>Unit price</th>
							<th>Quantity per one Bag</th>
							<th>Cost per one Bag</th>
						</tr>
					</thead>
					<tbody>
						{data}
						{dataPresent
							? <tr>
								<td>Variable Cost:</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td>{dataPresent.variableCost}</td>
							</tr> : null}
						
					</tbody>
				</Table>
			</Container>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		data: state.data.data,
		token: state.auth.token,
		userId: state.auth.userId,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFetchData: (token, userId) => dispatch(actions.fetchData(token, userId)),
	};
};
export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(DataTable)
);
