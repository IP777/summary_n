import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "./middleware/thunk";
import ReduxThunk from "redux-thunk";
import summaryReducer from "./globalReducerAction";

const rootReducer = combineReducers({
  summaryReducer,
});

const middleware = [ReduxThunk];
const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
