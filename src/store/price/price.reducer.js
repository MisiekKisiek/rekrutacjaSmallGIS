import actionNames from '../action.names';

const price = (state = { promoCodeCorrect: "", promoPercent: 0 }, action) => {
  switch (action.type) {
    case actionNames.CHANGE_PROMO_PERCENT:
      return ({ ...state, promoPercent: action.payload.percent });
    case actionNames.CHANGE_PROMO_CODE_CORRECT:
      return ({ ...state, promoCodeCorrect: action.payload.codeCorrect });
    default:
      return state
  }
}

export default price