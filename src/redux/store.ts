import {createStore, applyMiddleware, AnyAction} from "redux";
import {createLogger} from 'redux-logger'
import { rootReducer } from "./root-reducer";
import thunk , { ThunkAction} from 'redux-thunk'


const logger =  createLogger({
    collapsed: true
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger ));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
export default store;