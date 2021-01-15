import { combineReducers } from "redux";

const rootReducer = combineReducers({
    liquors: liquorsReducer,
    drinks: drinksReducer
  });

export default rootReducer;

function liquorsReducer(state = {}, action){
    return state
}

function drinksReducer(state = {}, action){
    return state
}