import { combineReducers } from "redux";

const rootReducer = combineReducers({
  users: userReducer,
  liquors: liquorReducer
});

export default rootReducer;

function userReducer( state = {users: []}, action ){
    return state

}

function liquorReducer( state =  {}, action ){
    return state

}