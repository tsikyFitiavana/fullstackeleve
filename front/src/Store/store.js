import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index'

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState, 
    applyMiddleware(...middleware),
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);

export default store;