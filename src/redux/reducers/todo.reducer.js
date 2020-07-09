import * as AT from '../action.types';

const INITIAL_STATE = {dataStream: {label: 'Instagram'}, rangeDate: {startDate: {}, endDate: {}}};
const todoReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case AT.DATA_STREAM_REQUEST:
			console.log(action.payload);
			return {...state, dataStream: action.payload.dataStream};
		
		case AT.RANGE_DATE_REQUEST:
			console.log(action.payload);
			return {...state, rangeDate: action.payload.rangeDate};
		default:
			return state;
	}
};
export default todoReducer;
