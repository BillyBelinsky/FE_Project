const initialState = {
    items: [],
    total: 0
  }

const ADD_TO_CART = "ADD_TO_CART"
const REMOVE_FROM_CART = "REMOVE_FROM_CART"
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          items: [...state.items, action.payload],
          total: state.total + action.payload.price
        }
      case "REMOVE_FROM_CART":
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id),
          total: state.total - action.payload.price
        };
      default:
        return state
    }
  }
  
  export default cartReducer

export const AddToCartAction = (item) => {
    return {
      type: ADD_TO_CART,
      payload: item
    }
  }

export const RemoveFromCartAction = (item) => {
    return {
      type: REMOVE_FROM_CART,
      payload: item
    }
  }
  