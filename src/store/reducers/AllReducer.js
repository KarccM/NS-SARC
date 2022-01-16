import { combineReducers } from "redux";
import AuthReducer from './AuthReducer'

const allReds = combineReducers({ auth: AuthReducer });

export default allReds;