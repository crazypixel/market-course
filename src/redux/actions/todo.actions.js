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
		// body: {},
		url: 'https://run.mocky.io/v3/9f55c346-6573-4039-aa7b-9e04adc0d075',
	}
});
