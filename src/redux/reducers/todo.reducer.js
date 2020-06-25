import * as AT from '../action.types';
import {uuid} from '../../utils';

const INITIAL_STATE = [
	{id: uuid(), label: 'Buy Eggs'},
	{id: uuid(), label: 'Learn Redux'},
];
const todoReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case AT.ADD_TASK:
			return state.concat({id: uuid(), label: action.payload.label});
		
		case AT.REMOVE_TASK:
			return state.filter(item => item.id !== action.payload.id);
		
		default:
			return state;
	}
};

export default todoReducer;
