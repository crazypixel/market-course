import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/root.reducer';

// middlewares
import logMiddleware from './middlewares/log.middleware';
import apiMiddleware from './middlewares/api.middleware';

const middlewares = [logMiddleware, apiMiddleware];
const storeEnhancers = compose(applyMiddleware(...middlewares));
export default createStore(rootReducer, {}, storeEnhancers);
