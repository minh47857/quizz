import { combineReducers } from "redux";
import userReducer from "./userReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
	count: counterReducer,
	user: userReducer
})

export default rootReducer;