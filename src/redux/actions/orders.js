import axios from 'axios';
import {
  GET_ALL_ORDER_SUCCESS,
  GET_ALL_ORDER_FAIL,
  GET_ALL_ORDER_ADMIN_SUCCESS,
  GET_ALL_ORDER_ADMIN_FAIL,
  GET_ALL_ORDER_ADMIN_ACCOUNT_SUCCESS,
  GET_ALL_ORDER_ADMIN_ACCOUNT_FAIL,
  GET_ORDER_DETAIL_SUCCESS,
  GET_ORDER_DETAIL_FAIL,
  SEARCH_ORDER_SUCCESS,
  SEARCH_ORDER_FAIL,
  POST_ORDER_SUCCESS,
  POST_ORDER_FAIL,
  PUT_ORDER_SUCCESS,
  PUT_ORDER_FAIL,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
  START_QUERY,
  END_QUERY,
  PUT_CANCEL_ORDER_SUCCESS,
  PUT_CANCEL_ORDER_FAIL,
} from '../constants/orders';
import action from './action';
import { setNote } from './utils';

// localStorage.setItem("customorLogin", JSON.stringify(res.data))
// localStorage.setItem("isCustomorLogin", JSON.stringify(true))

export const PostOrder = (data, token) => {
  if (token) {
    return (dispatch) => {
      dispatch(action(START_QUERY, true));
      axios
        .post(`http://localhost:8080/api/order`, data, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(setNote(true, 'isPostOrder'));
          return dispatch(action(POST_ORDER_SUCCESS, res.data));
        })
        .catch((err) => {
          const order = {
            open: true,
            severity: 'error',
            message: err.request.responseText,
          };
          dispatch(action(POST_ORDER_FAIL, order));
        });
    };
  }
};

export const PostOrderPaypal = (data, token) => {
  if (token) {
    return (dispatchOrder) => {
      dispatchOrder(action(START_QUERY, true));
      axios
        .post(`http://localhost:8080/api/order`, data, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatchOrder(setNote(true, 'isPostOrder'));
          return dispatchOrder(action(POST_ORDER_SUCCESS, res.data));
        })
        .catch((err) => {
          const order = {
            open: true,
            severity: 'error',
            message: err.request.responseText,
          };
          dispatchOrder(action(POST_ORDER_FAIL, order));
        });
    };
  }
};

export const GetOrders = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/order`)
      .then((res) => {
        dispatch(action(GET_ALL_ORDER_SUCCESS, res.data));
      })
      .catch((err) => {
        const order = {
          open: true,
          severity: 'error',
          message: err,
        };
        dispatch(action(GET_ALL_ORDER_FAIL, order));
      });
  };
};

export const GetAdminOrders = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/order/admin/all`)
      .then((res) => {
        dispatch(action(GET_ALL_ORDER_ADMIN_SUCCESS, res.data));
      })
      .catch((err) => {
        const order = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_ALL_ORDER_ADMIN_FAIL, order));
      });
  };
};
export const GetAdminAccountOrders = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/order/admin/account`)
      .then((res) => {
        dispatch(action(GET_ALL_ORDER_ADMIN_ACCOUNT_SUCCESS, res.data));
      })
      .catch((err) => {
        const order = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_ALL_ORDER_ADMIN_ACCOUNT_FAIL, order));
      });
  };
};
export const GetOrder = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/api/order/${id}`)
      .then((res) => {
        dispatch(action(GET_ORDER_DETAIL_SUCCESS, res.data));
      })
      .catch((err) => {
        const order = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_ORDER_DETAIL_FAIL, order));
      });
  };
};

export const GetOrderAccount = (id, token) => {
  if (token) {
    return (dispatch) => {
      axios
        .get(`http://localhost:8080/api/order/account/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(action(GET_ORDER_DETAIL_SUCCESS, res.data));
        })
        .catch((err) => {
          const order = {
            open: true,
            severity: 'error',
            message: err.request.responseText,
          };
          dispatch(action(GET_ORDER_DETAIL_FAIL, order));
        });
    };
  }
};

export const SearchOrder = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/api/order/${id}`)
      .then((res) => {
        dispatch(action(SEARCH_ORDER_SUCCESS, res.data));
      })
      .catch((err) => {
        const order = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(SEARCH_ORDER_FAIL, order));
      });
  };
};

export const PutOrder = (id, data) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:8080/api/order/${id}`, data)
      .then((res) => {
        dispatch(action(PUT_ORDER_SUCCESS, res.data));
      })
      .catch((err) => {
        const order = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(PUT_ORDER_FAIL, order));
      });
  };
};

export const PutCancelOrder = (id, data) => {
  return (dispatch) => {
    dispatch(action(START_QUERY, true));
    axios
      .put(`http://localhost:8080/api/order/cancel/${id}`, data)
      .then((res) => {
        dispatch(action(PUT_CANCEL_ORDER_SUCCESS, res.data));
      })
      .catch((err) => {
        const order = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(PUT_CANCEL_ORDER_FAIL, order));
      });
  };
};

export const DeleteOrder = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:8080/api/order/${id}`)
      .then((res) => {
        dispatch(action(DELETE_ORDER_SUCCESS, res.data));
      })
      .catch((err) => {
        const order = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(DELETE_ORDER_FAIL, order));
      });
  };
};
