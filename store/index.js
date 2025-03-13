import studentReducer from "./ducks/students.js";
import classReducer from "./ducks/classes.js";

const reducer = Redux.combineReducers({
  student: studentReducer,
  classes: classReducer,
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
