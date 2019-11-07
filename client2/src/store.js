import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './reducers/index.js'
const middleware=[thunk];

const store=createStore(RootReducer,
    {},applyMiddleware(...middleware));
export default store;