import * as AT from '../action.types';
import sdk from '@datorama/sdk';

const apiMiddleware = store => next => action => {
	if (action.type !== AT.API_REQUEST) {
		return next(action);
	}
	
	const {url, method, baseAction, body} = action.meta;
	const options = {method};
	
	// todo: patch put
	if (method === 'POST') {
		options.body = JSON.stringify(body);
	}
	
	store.dispatch({type: baseAction.PENDING});
	
	if (method === 'GET') {
		sdk.api.get(url, (error, payload) => {
			if (error) {
				store.dispatch({type: baseAction.ERROR, payload: error});
			} else {
				store.dispatch({type: baseAction.SUCCESS, payload});
			}
		});
	}
};

export default apiMiddleware;
