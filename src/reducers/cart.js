import {
  ADD_TO_CART,
  REMOVE_FROM_CART
} from '../constants/ActionTypes'

const initialState = {
  order: {}
}


const order = (state = initialState.order, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }
      case REMOVE_FROM_CART:
        const value = action.productId
        const newstate = JSON.parse(JSON.stringify(state))
        newstate[value] = newstate[value] -1
        if(newstate[value]===0){
          delete newstate[value]
        }
        return newstate
    default:
      return state
  }
}

export const getQuantity = (state, productId) =>
  state.order[productId] || 0

export const getAddedIds = state => Object.keys(state.order)

const cart = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        order: order(state.order, action)
      }
  }
}

export default cart
