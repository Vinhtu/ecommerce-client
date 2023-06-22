import axios from 'axios';
import {
  GET_ALL_VOUCHER_SUCCESS,
  GET_ALL_VOUCHER_FAIL,
  GET_ALL_VOUCHER_ADMIN_SUCCESS,
  GET_ALL_VOUCHER_ADMIN_FAIL,
  GET_ALL_VOUCHER_ADMIN_ACCOUNT_SUCCESS,
  GET_ALL_VOUCHER_ADMIN_ACCOUNT_FAIL,
  GET_VOUCHER_DETAIL_SUCCESS,
  GET_VOUCHER_DETAIL_FAIL,
  SEARCH_VOUCHER_SUCCESS,
  SEARCH_VOUCHER_FAIL,
  POST_VOUCHER_SUCCESS,
  POST_VOUCHER_FAIL,
  PUT_VOUCHER_SUCCESS,
  PUT_VOUCHER_FAIL,
  DELETE_VOUCHER_SUCCESS,
  DELETE_VOUCHER_FAIL,
} from '../constants/vouchers';
import action from './action';

// localStorage.setItem("customorLogin", JSON.stringify(res.data))
// localStorage.setItem("isCustomorLogin", JSON.stringify(true))

export const PostVoucher = (data) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:8080/api/voucher`, data)
      .then((res) => {
        dispatch(action(POST_VOUCHER_SUCCESS, res.data));
      })
      .catch((err) => {
        const voucher = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(POST_VOUCHER_FAIL, voucher));
      });
  };
};

export const GetVouchers = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/voucher`)
      .then((res) => {
        dispatch(action(GET_ALL_VOUCHER_SUCCESS, res.data));
      })
      .catch((err) => {
        const voucher = {
          open: true,
          severity: 'error',
          message: err,
        };
        dispatch(action(GET_ALL_VOUCHER_FAIL, voucher));
      });
  };
};

export const GetVoucherDate = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/voucher`)
      .then((res) => {
        dispatch(action(GET_ALL_VOUCHER_SUCCESS, res.data));
      })
      .catch((err) => {
        const voucher = {
          open: true,
          severity: 'error',
          message: err,
        };
        dispatch(action(GET_ALL_VOUCHER_FAIL, voucher));
      });
  };
};

export const GetAdminVouchers = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/voucher/admin/all`)
      .then((res) => {
        dispatch(action(GET_ALL_VOUCHER_ADMIN_SUCCESS, res.data));
      })
      .catch((err) => {
        const voucher = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_ALL_VOUCHER_ADMIN_FAIL, voucher));
      });
  };
};
export const GetAdminAccountVouchers = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/voucher/admin/account`)
      .then((res) => {
        dispatch(action(GET_ALL_VOUCHER_ADMIN_ACCOUNT_SUCCESS, res.data));
      })
      .catch((err) => {
        const voucher = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_ALL_VOUCHER_ADMIN_ACCOUNT_FAIL, voucher));
      });
  };
};
export const GetVoucher = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/api/voucher/${id}`)
      .then((res) => {
        dispatch(action(GET_VOUCHER_DETAIL_SUCCESS, res.data));
      })
      .catch((err) => {
        const voucher = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_VOUCHER_DETAIL_FAIL, voucher));
      });
  };
};

export const SearchVoucher = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/api/voucher/${id}`)
      .then((res) => {
        dispatch(action(SEARCH_VOUCHER_SUCCESS, res.data));
      })
      .catch((err) => {
        const voucher = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(SEARCH_VOUCHER_FAIL, voucher));
      });
  };
};

export const PutVoucher = (id, data) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:8080/api/voucher/${id}`, data)
      .then((res) => {
        dispatch(action(PUT_VOUCHER_SUCCESS, res.data));
      })
      .catch((err) => {
        const voucher = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(PUT_VOUCHER_FAIL, voucher));
      });
  };
};

export const DeleteVoucher = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:8080/api/voucher/${id}`)
      .then((res) => {
        dispatch(action(DELETE_VOUCHER_SUCCESS, res.data));
      })
      .catch((err) => {
        const voucher = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(DELETE_VOUCHER_FAIL, voucher));
      });
  };
};
