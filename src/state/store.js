import rootReducer from "./shipping-reducers/reducers/indexReducer";
import { createStore } from "redux";

const store=createStore(rootReducer)

export default store