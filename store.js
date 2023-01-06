import { createStore } from "redux";
import { counterReducer, todoListReducer } from "./reducer";
import { combineReducers } from "redux";
export const allReducers = combineReducers({
    counterReducer,
    todoListReducer
});
