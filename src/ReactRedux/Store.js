import { createStore } from "redux";
import counterDispatch from "./Dispatch";

const store = createStore(counterDispatch)

export default store;