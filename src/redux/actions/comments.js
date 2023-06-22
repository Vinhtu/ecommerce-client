import axios from 'axios';
import {
  GET_ALL_COMMENT_SUCCESS,
  GET_ALL_COMMENT_FAIL,
  GET_ALL_COMMENT_ADMIN_SUCCESS,
  GET_ALL_COMMENT_ADMIN_FAIL,
  GET_ALL_COMMENT_ADMIN_ACCOUNT_SUCCESS,
  GET_ALL_COMMENT_ADMIN_ACCOUNT_FAIL,
  GET_COMMENT_DETAIL_SUCCESS,
  GET_COMMENT_DETAIL_FAIL,
  SEARCH_COMMENT_SUCCESS,
  SEARCH_COMMENT_FAIL,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAIL,
  PUT_COMMENT_SUCCESS,
  PUT_COMMENT_FAIL,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAIL,
  START_QUERY,
  END_QUERY,
} from '../constants/comments';
import action from './action';

// localStorage.setItem("customorLogin", JSON.stringify(res.data))
// localStorage.setItem("isCustomorLogin", JSON.stringify(true))

export const PostComment = (data) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:8080/api/o`, data)
      .then((res) => {
        dispatch(action(POST_COMMENT_SUCCESS, res.data));
      })
      .catch((err) => {
        const comment = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(POST_COMMENT_FAIL, comment));
      });
  };
};

export const GetComments = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/comment`)
      .then((res) => {
        dispatch(action(GET_ALL_COMMENT_SUCCESS, res.data));
      })
      .catch((err) => {
        const comment = {
          open: true,
          severity: 'error',
          message: err,
        };
        dispatch(action(GET_ALL_COMMENT_FAIL, comment));
      });
  };
};

export const GetAdminComments = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/comment/admin/all`)
      .then((res) => {
        dispatch(action(GET_ALL_COMMENT_ADMIN_SUCCESS, res.data));
      })
      .catch((err) => {
        const comment = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_ALL_COMMENT_ADMIN_FAIL, comment));
      });
  };
};
export const GetAdminAccountComments = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/comment/admin/account`)
      .then((res) => {
        dispatch(action(GET_ALL_COMMENT_ADMIN_ACCOUNT_SUCCESS, res.data));
      })
      .catch((err) => {
        const comment = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_ALL_COMMENT_ADMIN_ACCOUNT_FAIL, comment));
      });
  };
};
export const GetComment = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/api/comment/${id}`)
      .then((res) => {
        dispatch(action(GET_COMMENT_DETAIL_SUCCESS, res.data));
      })
      .catch((err) => {
        const comment = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_COMMENT_DETAIL_FAIL, comment));
      });
  };
};

export const SearchComment = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/api/comment/${id}`)
      .then((res) => {
        dispatch(action(SEARCH_COMMENT_SUCCESS, res.data));
      })
      .catch((err) => {
        const comment = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(SEARCH_COMMENT_FAIL, comment));
      });
  };
};

export const PutComment = (id, data, token) => {
  if (token) {
    return (dispatch) => {
      dispatch(action(START_QUERY, true));
      axios
        .put(`http://localhost:8080/api/comment/${id}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(action(PUT_COMMENT_SUCCESS, res.data));
        })
        .catch((err) => {
          const comment = {
            open: true,
            severity: 'error',
            message: err.request.responseText,
          };
          dispatch(action(PUT_COMMENT_FAIL, comment));
        });
    };
  }
};

export const PostReportComment = (id, data, token) => {
  if (token) {
    return (dispatch) => {
      dispatch(action(START_QUERY, true));
      axios
        .post(`http://localhost:8080/api/reportcomment/${id}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(action(PUT_COMMENT_SUCCESS, res.data));
        })
        .catch((err) => {
          const comment = {
            open: true,
            severity: 'error',
            message: err.request.responseText,
          };
          dispatch(action(PUT_COMMENT_FAIL, comment));
        });
    };
  }
};

export const PutLikeComment = (id, data, token) => {
  if (token) {
    return (dispatch) => {
      dispatch(action(START_QUERY, true));
      axios
        .put(`http://localhost:8080/api/comment/like/${id}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(action(PUT_COMMENT_SUCCESS, res.data));
        })
        .catch((err) => {
          const comment = {
            open: true,
            severity: 'error',
            message: err.request.responseText,
          };
          dispatch(action(PUT_COMMENT_FAIL, comment));
        });
    };
  }
};

export const PutReplyComment = (id, data, token) => {
  if (token) {
    return (dispatch) => {
      dispatch(action(START_QUERY, true));
      axios
        .put(`http://localhost:8080/api/comment/reply/${id}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(action(PUT_COMMENT_SUCCESS, res.data));
        })
        .catch((err) => {
          const comment = {
            open: true,
            severity: 'error',
            message: err.request.responseText,
          };
          dispatch(action(PUT_COMMENT_FAIL, comment));
        });
    };
  }
};

export const DeleteComment = (id, token) => {
  if (token) {
    return (dispatch) => {
      axios
        .delete(`http://localhost:8080/api/comment/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(action(DELETE_COMMENT_SUCCESS, res.data));
        })
        .catch((err) => {
          const comment = {
            open: true,
            severity: 'error',
            message: err.request.responseText,
          };
          dispatch(action(DELETE_COMMENT_FAIL, comment));
        });
    };
  }
};
