import actionNames from '../action.names';

export const addToCart = (id) => ({
  type: actionNames.ADD_TO_CART,
  payload: {
    id,
  },
});