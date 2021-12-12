import { combineReducers } from "redux";
import employeesReducer from "./employeesReducer"


const reducers = combineReducers({
    employee: employeesReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>