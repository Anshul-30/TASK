import { combineReducers } from "redux";
import userState from "./ContinueLogin";
import dataInput from "./DatnInput";


const rootReducer = combineReducers({
    userState,
    dataInput
})

export default rootReducer