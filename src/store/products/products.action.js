import actionNames from '../action.names';

export const setProducts= (products) => ({
  type: actionNames.SET_PRODUCTS,
  payload: {
    products,
  },
});