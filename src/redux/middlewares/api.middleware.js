import * as AT from '../action.types';

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
	
	fetch(url, options)
		.then(res => res.json())
		.then(payload => store.dispatch({type: baseAction.SUCCESS, payload}))
		.catch(payload => store.dispatch({type: baseAction.ERROR, payload}));
};

export default apiMiddleware;
