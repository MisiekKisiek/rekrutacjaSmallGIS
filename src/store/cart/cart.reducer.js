import actionNames from '../action.names';

const cart = (state = [], action) => {
  switch (action.type) {
    case actionNames.ADD_TO_CART:
      return [...state];

    default:
      return state;
  }
}

export default cart;