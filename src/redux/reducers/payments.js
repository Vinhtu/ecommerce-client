import {
  GET_ALL_PAYMENT_SUCCESS,
  GET_ALL_PAYMENT_FAIL,
  GET_ALL_PAYMENT_ADMIN_SUCCESS,
  GET_ALL_PAYMENT_ADMIN_FAIL,
  GET_ALL_PAYMENT_ADMIN_ACCOUNT_SUCCESS,
  GET_ALL_PAYMENT_ADMIN_ACCOUNT_FAIL,
  GET_PAYMENT_DETAIL_SUCCESS,
  GET_PAYMENT_DETAIL_FAIL,
  SEARCH_PAYMENT_SUCCESS,
  SEARCH_PAYMENT_FAIL,
  POST_PAYMENT_SUCCESS,
  POST_PAYMENT_FAIL,
  PUT_PAYMENT_SUCCESS,
  PUT_PAYMENT_FAIL,
  DELETE_PAYMENT_SUCCESS,
  DELETE_PAYMENT_FAIL,
} from '../constants/payments';

// const intialState = {
// 	isPostNOTIFICATION: false,
// };

const PaymentReducer = (state, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_PAYMENT_SUCCESS:
      return { ...state, paymentList: payload };
    case GET_ALL_PAYMENT_FAIL:
      return { ...state };

    case GET_ALL_PAYMENT_ADMIN_SUCCESS:
      return { ...state, paymentAdminList: payload };
    case GET_ALL_PAYMENT_ADMIN_FAIL:
      return { ...state };
    case GET_ALL_PAYMENT_ADMIN_ACCOUNT_SUCCESS:
      return { ...state, paymentAdminAccountList: payload };
    case GET_ALL_PAYMENT_ADMIN_ACCOUNT_FAIL:
      return { ...state };

    case GET_PAYMENT_DETAIL_SUCCESS:
      return { ...state, paymentDetail: payload };
    case GET_PAYMENT_DETAIL_FAIL:
      return { ...state };
    case SEARCH_PAYMENT_SUCCESS:
      return { ...state, paymentListSearch: payload };
    case SEARCH_PAYMENT_FAIL:
      return { ...state };
    case POST_PAYMENT_SUCCESS:
      return { ...state, isPostPayment: true };
    case POST_PAYMENT_FAIL:
      return { ...state, isPostPayment: false };
    case PUT_PAYMENT_SUCCESS:
      return { ...state, isPutPayment: true };
    case PUT_PAYMENT_FAIL:
      return { ...state, isPutPayment: false };
    case DELETE_PAYMENT_SUCCESS:
      return { ...state, payment: payload };
    case DELETE_PAYMENT_FAIL:
      return { ...state, payment: payload };
    default:
      return { ...state };
  }
};

export default PaymentReducer;
