import roomsReducer from "./reducers/roomsReducer"
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"

export const store = createStore(
    roomsReducer,
    applyMiddleware(thunk)
)




