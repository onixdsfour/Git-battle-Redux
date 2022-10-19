import {combineReducers} from "redux";
import { popularReducer } from "./popuar-reducers";
import { battleReducer } from "./battle-reducers";

export const rootReducer = combineReducers({
    popularReducer,
    battleReducer
}) 