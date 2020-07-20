import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
	data: [],
	finished: false
};

const submitDataSuccess = (state, action) => {
	return updateObject(state, {
		finished: true
	})
}

const startSubmitData = (state, action) => {
	return updateObject(state, {
		finished: false
	})
}

const fetchDataSuccess = (state, action) => {
	return updateObject(state, {
		data: action.data,
	});
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_DATA_SUCCESS:
			return fetchDataSuccess(state, action);
		case actionTypes.START_SUBMIT_DATA:
			return startSubmitData(state, action);
		case actionTypes.SUBMIT_DATA_SUCCESS:
			return submitDataSuccess(state, action);
		default:
			return state;
	}
};

export default reducer;
