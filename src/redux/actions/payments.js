import axios from 'axios';
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
import action from './action';

// localStorage.setItem("customorLogin", JSON.stringify(res.data))
// localStorage.setItem("isCustomorLogin", JSON.stringify(true))

export const PostPayment = (data) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:8080/api/payment`, data)
      .then((res) => {
        dispatch(action(POST_PAYMENT_SUCCESS, res.data));
      })
      .catch((err) => {
        const payment = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(POST_PAYMENT_FAIL, payment));
      });
  };
};

export const GetPayments = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/payment`)
      .then((res) => {
        dispatch(action(GET_ALL_PAYMENT_SUCCESS, res.data));
      })
      .catch((err) => {
        const payment = {
          open: true,
          severity: 'error',
          message: err,
        };
        dispatch(action(GET_ALL_PAYMENT_FAIL, payment));
      });
  };
};

export const GetAdminPayments = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/payment/admin/all`)
      .then((res) => {
        dispatch(action(GET_ALL_PAYMENT_ADMIN_SUCCESS, res.data));
      })
      .catch((err) => {
        const payment = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_ALL_PAYMENT_ADMIN_FAIL, payment));
      });
  };
};
export const GetAdminAccountPayments = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/payment/admin/account`)
      .then((res) => {
        dispatch(action(GET_ALL_PAYMENT_ADMIN_ACCOUNT_SUCCESS, res.data));
      })
      .catch((err) => {
        const payment = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_ALL_PAYMENT_ADMIN_ACCOUNT_FAIL, payment));
      });
  };
};
export const GetPayment = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/api/payment/${id}`)
      .then((res) => {
        dispatch(action(GET_PAYMENT_DETAIL_SUCCESS, res.data));
      })
      .catch((err) => {
        const payment = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_PAYMENT_DETAIL_FAIL, payment));
      });
  };
};

export const SearchPayment = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/api/payment/${id}`)
      .then((res) => {
        dispatch(action(SEARCH_PAYMENT_SUCCESS, res.data));
      })
      .catch((err) => {
        const payment = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(SEARCH_PAYMENT_FAIL, payment));
      });
  };
};

export const PutPayment = (id, data) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:8080/api/payment/${id}`, data)
      .then((res) => {
        dispatch(action(PUT_PAYMENT_SUCCESS, res.data));
      })
      .catch((err) => {
        const payment = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(PUT_PAYMENT_FAIL, payment));
      });
  };
};

export const DeletePayment = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:8080/api/payment/${id}`)
      .then((res) => {
        dispatch(action(DELETE_PAYMENT_SUCCESS, res.data));
      })
      .catch((err) => {
        const payment = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(DELETE_PAYMENT_FAIL, payment));
      });
  };
};
