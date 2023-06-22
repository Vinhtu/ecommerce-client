import {
  START_QUERY,
  END_QUERY,
  GET_ALL_CART_SUCCESS,
  GET_ALL_CART_FAIL,
  GET_ALL_CART_ADMIN_SUCCESS,
  GET_ALL_CART_ADMIN_FAIL,
  GET_ALL_CART_ADMIN_ACCOUNT_SUCCESS,
  GET_ALL_CART_ADMIN_ACCOUNT_FAIL,
  GET_CART_DETAIL_SUCCESS,
  GET_CART_DETAIL_FAIL,
  SEARCH_CART_SUCCESS,
  SEARCH_CART_FAIL,
  POST_CART_SUCCESS,
  POST_CART_FAIL,
  PUT_CART_SUCCESS,
  PUT_CART_FAIL,
  DELETE_CART_SUCCESS,
  DELETE_CART_FAIL,
} from '../constants/carts';

const intialState = {
  isPostCart: false,
  isPutCart: false,
};

const CartReducer = (state = intialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case START_QUERY:
      return { ...state, isPostCart: false, isPutCart: false };
    case END_QUERY:
      return { ...state, isPostCart: false, isPutCart: false };
    case GET_ALL_CART_SUCCESS:
      return { ...state, cartList: payload };
    case GET_ALL_CART_FAIL:
      return { ...state };

    case GET_ALL_CART_ADMIN_SUCCESS:
      return { ...state, cartAdminList: payload };
    case GET_ALL_CART_ADMIN_FAIL:
      return { ...state };
    case GET_ALL_CART_ADMIN_ACCOUNT_SUCCESS:
      return { ...state, cartAdminAccountList: payload };
    case GET_ALL_CART_ADMIN_ACCOUNT_FAIL:
      return { ...state };

    case GET_CART_DETAIL_SUCCESS:
      return { ...state, cartDetail: payload };
    case GET_CART_DETAIL_FAIL:
      return { ...state };
    case SEARCH_CART_SUCCESS:
      return { ...state, cartListSearch: payload };
    case SEARCH_CART_FAIL:
      return { ...state };
    case POST_CART_SUCCESS:
      return { ...state, isPostCart: payload };
    case POST_CART_FAIL:
      return { ...state, isPostCart: payload };
    case PUT_CART_SUCCESS:
      return { ...state, isPutCart: payload };
    case PUT_CART_FAIL:
      return { ...state, isPutCart: payload };
    case DELETE_CART_SUCCESS:
      return { ...state, cart: payload };
    case DELETE_CART_FAIL:
      return { ...state, cart: payload };
    default:
      return { ...state };
  }
};

export default CartReducer;
