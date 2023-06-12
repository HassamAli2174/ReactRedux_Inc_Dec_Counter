import changeTheNumber from "./IncreDecre";
import multiTheNumber from "./MultiDiv";

import { combineReducers } from "redux";
const rootReducer = combineReducers({
    changeTheNumber,
    multiTheNumber
});
export default rootReducer;