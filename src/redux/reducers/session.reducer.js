import * as AT from '../action.types';

const INITIAL_STATE = {};
const todoReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case AT.SAVE_SESSION:
			console.log(action.payload);
			return action.payload.session;
		default:
			return state;
	}
};
export default todoReducer;
