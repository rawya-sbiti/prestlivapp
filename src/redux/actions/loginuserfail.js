import {LOGINUSERFAIL} from '../actions-types';
export const loginUserFail = (dispatch, error) => {
  return dispatch({
    type: LOGINUSERFAIL,
    payload: error,
  });
};
