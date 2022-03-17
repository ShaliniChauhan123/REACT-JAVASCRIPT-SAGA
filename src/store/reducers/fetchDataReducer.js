import { types } from "../actionTypes/types";
const initialState = {
  loading: false,
  title: "",
  user: {},
  error: {},
};

const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE:
      return {
        ...state,
        title: action.payload,
      };
    case types.SEND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: {},
      };
    case types.GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        user: {},
        error: action.error,
      };
    default:
      return state;
  }
};
export default fetchDataReducer;
