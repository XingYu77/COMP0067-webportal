import { combineReducers } from "redux";
import modules from "./modules.js";
import students from "./students.js";
import teams from "./teams.js";
import ta from "./ta.js";
import authReducer from './authReducer';

export default combineReducers({ modules, students , teams , ta, authReducer });