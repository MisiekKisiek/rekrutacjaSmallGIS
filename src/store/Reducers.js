import { combineReducers } from 'redux';

import cart from './cart/cart.reducer.js';
import products from './products/products.reducer.js';

export default combineReducers({
  cart,
  products,
  // cartVisibility,
})