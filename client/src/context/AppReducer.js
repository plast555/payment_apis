export default (state, action) => {
  switch(action.type) {

    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        count: state.cart.length + 1,
        total: state.total + action.payload.price
      }

    default:
      return state
  }
}