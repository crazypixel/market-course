import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/root.reducer';

// middlewares
import logMiddleware from './middlewares/log.middleware';

const middlewares = [logMiddleware];
const storeEnhancers = compose(applyMiddleware(...middlewares));
export default createStore(rootReducer, {}, storeEnhancers);
