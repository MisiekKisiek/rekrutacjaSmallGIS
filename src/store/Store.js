import { createStore } from "redux";
import reducers from "./Reducers";
import data from '../data/products.json';

const initialStore = { products: data }

const store = createStore(reducers, initialStore);
export default store;