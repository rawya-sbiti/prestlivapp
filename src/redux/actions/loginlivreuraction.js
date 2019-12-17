import {LOGINLIVREUR} from '../actions-types';
import {loginUserSuccess} from './loginusersucess';
import {loginUserFail} from './loginuserfail';
import md5 from 'md5';
import axios from 'axios';
export const loginlivreur = (email, password) => {
  console.log(email);
  //mdpassword=md5(password);
  //console.log(mdpassword)
  return dispatch => {
    dispatch({type: LOGINLIVREUR});
    axios.post('http://mechria.com/server/loginlivreur.php',
  {
      'email': email,
      'password': password,


  },{
      'headers': {
        'Content-Type': 'application/json',
      }
  }).then((response ) => {
    if(response.data=='Invalid Username or Password Please Try Again')
    loginUserFail(dispatch, response.data);
    else
    loginUserSuccess(dispatch, response.data);
     console.log("reactNativeDemo","response get details:"+response.data);
  })
  .catch((error) => {
    loginUserFail(dispatch, error);
     console.log("axios error:",error);
  });
  };
};
