import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

import { AppReducers, AppState } from './app';

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}

const reducers = combineReducers<{
    app: AppState;
}>({
    app: AppReducers
});

const composeEnhancers =
    (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

export default store;
