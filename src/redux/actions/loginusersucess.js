import {LOGINUSERSUCCESS} from '../actions-types';
export const loginUserSuccess = (dispatch, user) => {
  return dispatch({
    type: LOGINUSERSUCCESS,
    payload: user,
  });
};
