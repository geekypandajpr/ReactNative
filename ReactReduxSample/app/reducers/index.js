import { combineReducers } from 'redux';
import * as recipeReducer from './recipes';

export default combineReducers(Object.assign(
    recipeReducer,
));


 