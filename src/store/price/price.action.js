import actionNames from '../action.names';

export const changePromoPercent = (percent) => ({
  type: actionNames.CHANGE_PROMO_PERCENT,
  payload: {
    percent,
  },
})


export const changePromoCodeCorrect = (codeCorrect) => ({
  type: actionNames.CHANGE_PROMO_CODE_CORRECT,
  payload: {
    codeCorrect,
  }
})