import * as AT from '../action.types';

export const addTask = label => ({
	type: AT.ADD_TASK,
	payload: {label},
});

export const removeTask = id => ({
	type: AT.REMOVE_TASK,
	payload: {id}
});

export const fetchTasks = () => ({
	type: AT.API_REQUEST,
	meta: {
		baseAction: AT.FETCH_TASKS,
		method: 'GET',
		url: '/v1/accounts',
	}
});
