import { combineReducers } from "redux";

import errors from "./errors_reducer";
import entities from "./entities_reducer";
import entitiesReducer from "./entities_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
});

export default rootReducer;
