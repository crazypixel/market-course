import * as AT from '../action.types';

export const saveSession = session => ({
	type: AT.SAVE_SESSION,
	payload: {session},
});
