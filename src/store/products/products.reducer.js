import actionNames from '../action.names';

const products = (state = [], action) => {
  switch (action.type) {
    case actionNames.SET_PRODUCTS:
      return action.payload.products

    default:
      return state;
  }
}

export default products;