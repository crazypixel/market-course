import * as AT from '../action.types';

export const addTask = window.addTask = label => ({
	type: AT.ADD_TASK,
	payload: {label},
});

export const removeTask = window.removeTask = id => ({
	type: AT.REMOVE_TASK,
	payload: {id}
});
