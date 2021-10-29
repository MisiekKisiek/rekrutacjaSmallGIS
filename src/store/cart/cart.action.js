import actionNames from '../action.names';

export const addToCart = (id) => ({
  type: actionNames.ADD_TO_CART,
  payload: {
    id,
  },
});

export const changeCartItemAmount = (id, amount) => ({
  type: actionNames.CHANGE_CART_ITEM_AMOUNT,
  payload: {
    id,
    amount,
  }
});

export const removeFromCart = (id) => ({
  type: actionNames.REMOVE_FROM_CART,
  payload: {
    id,
  }
});

export const clearCart = () => ({
  type: actionNames.CLEAR_CART
})