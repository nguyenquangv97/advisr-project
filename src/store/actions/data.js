import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const submitData = (data, token) => {
	return async (dispatch) => {
		await axios.post('/data.json?auth=' + token, data);
	};
};

export const submitDataSuccess = () => {
	return {
		type: actionTypes.SUBMIT_DATA_SUCCESS
	}
}

export const startSubmitData = () => {
	return {
		type: actionTypes.START_SUBMIT_DATA
	}
}

export const fetchDataSuccess = (data) => {
	return {
		type: actionTypes.FETCH_DATA_SUCCESS,
		data: data,
	};
};

export const fetchData = (token, userId) => {
	return async (dispatch) => {
		const queryParams =
			'?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
		const response = await axios.get('/data.json' + queryParams);
		const fetchedData = [];

		let variableCost = 0;
		for (let key in response.data) {
			variableCost += Number(response.data[key].dataValues['costPerOneBag']);
			fetchedData.push({
				...response.data[key],
				variableCost: variableCost * 1,
				id: key,
			});
		}

		dispatch(fetchDataSuccess(fetchedData));
	};
};
