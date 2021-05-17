import { CREATE_ORDER, CLEAR_ORDER, FETCH_ORDERS } from "../types";

const orderReducer = (state ={ orders : [JSON.parse(localStorage.getItem("orders"))]}, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { ...state, orders: state.orders.concat(action.payload)};
    case CLEAR_ORDER:
      return { order: null };
    case FETCH_ORDERS:
      return state;
    default:
      return state;
  }
};
export { orderReducer };