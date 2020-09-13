import { combineReducers } from 'redux';
import frozenReducer from './frozenReducer'
import meatReducer from './meatReducer';
import producerReducer from './producerReducer';


const rootReducer = combineReducers({
    frozen: frozenReducer,
    meat: meatReducer,
    produce: producerReducer
})

export default rootReducer;