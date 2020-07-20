import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
	data: [],
};

const fetchDataSuccess = (state, action) => {
	return updateObject(state, {
		data: action.data,
	});
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_DATA_SUCCESS:
			return fetchDataSuccess(state, action);
		default:
			return state;
	}
};

export default reducer;
