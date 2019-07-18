import {applyMiddleware, combineReducers, createStore} from "redux";
import task1Reducer from "./task1Reducer";
import task2Reducer from "./task2Reducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
	task1Page: task1Reducer,
	task2Page: task2Reducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store