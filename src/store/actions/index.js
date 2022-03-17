import { types } from "../actionTypes/types";
export function fetchData(val) {
  return {
    type: types.SEND_REQUEST,
    payload: val,
  };
}
export function fetchDataSuccess(user) {
  return {
    type: types.GET_USER_SUCCESS,
    payload: user,
  };
}

export function handleInputChangeInRedux(val) {
  return {
    type: types.HANDLE,
    payload: val,
  };
}
export function fetchDataFailure(error) {
  return {
    type: types.GET_USER_FAILURE,
    payload: {},
    error: error,
  };
}
