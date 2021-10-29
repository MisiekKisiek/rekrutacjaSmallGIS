import { combineReducers } from 'redux';

import cart from './cart/cart.reducer.js';
import products from './products/products.reducer.js';
import cartVisibility from './cartVisibility/cartVisibility.reducer.js';
import price from './price/price.reducer.js';

export default combineReducers({
  cart,
  products,
  cartVisibility,
  price,
})