import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import employeesReducer from "./reducers/employeesReducer"

export const store = createStore(
    employeesReducer,
    applyMiddleware(thunk)
)




