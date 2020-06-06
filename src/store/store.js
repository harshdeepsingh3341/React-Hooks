import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger'

export default createStore(reducers,  applyMiddleware(reduxThunk, logger))
