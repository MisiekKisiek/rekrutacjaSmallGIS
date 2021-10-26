import actionNames from '../action.names';

const products = (state = [], action) => {
  switch (action.type) {
    // case actionNames.ADD_TO_CART:
    //   return [...state];

    default:
      return state;
  }
}

export default products;