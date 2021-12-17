import roomsReducer from "../store/reducer/roomsReducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  roomsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
