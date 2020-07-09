const logMiddleware = store => next => action => {
	console.log('logger: ', action);
	
	return next(action);
};

export default logMiddleware;
