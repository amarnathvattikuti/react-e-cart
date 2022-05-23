import { legacy_createStore as createStore } from 'redux'
import rootReducer from "./redux/reducers/main";

export const store = createStore(rootReducer);

