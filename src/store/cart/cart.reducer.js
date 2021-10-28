import actionNames from '../action.names';

const cart = (state = [], action) => {
  switch (action.type) {
    case actionNames.ADD_TO_CART:
      const itemExist = [...state].findIndex(product => action.payload.id === product.id);

      if (itemExist === -1) {
        return [
          ...state, {
            id: action.payload.id,
            amount: 1,
          }
        ];

      } else {
        const itemIndex = [...state].findIndex(product => action.payload.id === product.id);
        const item = { id: [...state][itemIndex].id, amount: [...state][itemIndex].amount < 10 ? [...state][itemIndex].amount + 1 : [...state][itemIndex].amount };
        return [
          ...state.slice(0, itemIndex), item, ...state.slice(itemIndex + 1)
        ]
      }

    case "CHANGE_CART_ITEM_AMOUNT":
      const itemIndex = [...state].findIndex(product => action.payload.id === product.id);
      const item = { id: [...state][itemIndex].id, amount: parseInt(action.payload.amount) };
      return [
        ...state.slice(0, itemIndex), item, ...state.slice(itemIndex + 1)
      ]
    case "REMOVE_FROM_CART":
      const newState = [...state].filter(product => product.id !== action.payload.id);
      return newState
    default:
      return state;
  }
}

export default cart;