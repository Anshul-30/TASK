

import rootReducer from "./redux/reducer";
 import {thunk} from "redux-thunk"
import { createStore } from "redux";
const middlewares = [thunk];

const store = createStore(rootReducer)

export default store