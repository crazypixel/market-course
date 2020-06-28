const apiRequest = type => ({
	BASE: type,
	PENDING: `${type}_PENDING`,
	SUCCESS: `${type}_SUCCESS`,
	ERROR: `${type}_ERROR`,
});

export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const API_REQUEST = 'API_REQUEST';

export const FETCH_TASKS = apiRequest('FETCH_TASKS');
