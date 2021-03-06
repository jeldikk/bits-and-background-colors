import {applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import rootReducer from './root_reducer'

const middleware = [logger]

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;