import {
  GET_ALL_EVENT_SUCCESS,
  GET_ALL_EVENT_FAIL,
  GET_ALL_EVENT_ADMIN_SUCCESS,
  GET_ALL_EVENT_ADMIN_FAIL,
  GET_ALL_EVENT_ADMIN_ACCOUNT_SUCCESS,
  GET_ALL_EVENT_ADMIN_ACCOUNT_FAIL,
  GET_EVENT_DETAIL_SUCCESS,
  GET_EVENT_DETAIL_FAIL,
  SEARCH_EVENT_SUCCESS,
  SEARCH_EVENT_FAIL,
  POST_EVENT_SUCCESS,
  POST_EVENT_FAIL,
  PUT_EVENT_SUCCESS,
  PUT_EVENT_FAIL,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAIL,
} from '../constants/events';

// const intialState = {
// 	isPostNOTIFICATION: false,
// };

const EventReducer = (state, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_EVENT_SUCCESS:
      return { ...state, eventList: payload };
    case GET_ALL_EVENT_FAIL:
      return { ...state };

    case GET_ALL_EVENT_ADMIN_SUCCESS:
      return { ...state, eventAdminList: payload };
    case GET_ALL_EVENT_ADMIN_FAIL:
      return { ...state };
    case GET_ALL_EVENT_ADMIN_ACCOUNT_SUCCESS:
      return { ...state, eventAdminAccountList: payload };
    case GET_ALL_EVENT_ADMIN_ACCOUNT_FAIL:
      return { ...state };

    case GET_EVENT_DETAIL_SUCCESS:
      return { ...state, eventDetail: payload };
    case GET_EVENT_DETAIL_FAIL:
      return { ...state };
    case SEARCH_EVENT_SUCCESS:
      return { ...state, eventListSearch: payload };
    case SEARCH_EVENT_FAIL:
      return { ...state };
    case POST_EVENT_SUCCESS:
      return { ...state, isPostEvent: true };
    case POST_EVENT_FAIL:
      return { ...state, isPostEvent: false };
    case PUT_EVENT_SUCCESS:
      return { ...state, isPutEvent: true };
    case PUT_EVENT_FAIL:
      return { ...state, isPutEvent: false };
    case DELETE_EVENT_SUCCESS:
      return { ...state, event: payload };
    case DELETE_EVENT_FAIL:
      return { ...state, event: payload };
    default:
      return { ...state };
  }
};

export default EventReducer;
