import {REGISTERLIVREUR} from '../actions-types';
import {loginUserSuccess} from './loginusersucess';
import {loginUserFail} from './loginuserfail';
import md5 from 'md5';
import axios from 'axios';
export const registerlivreur = (name,surname,email,phone,vehicule,password) => {
  console.log(email);
  mdpassword=md5(password);
  //console.log(mdpassword)
  return dispatch => {
    dispatch({type: REGISTERLIVREUR});
    axios.post('http://mechria.com/server/registerlivreur.php',
  {
      'name':name,
      'surname':surname,
      'email': email,
      'phone':phone,
      'vehicule':vehicule,
      'password': mdpassword,


  },{
      'headers': {
        'Content-Type': 'application/json',
      }
  }).then((response ) => {
    if(response.data=='Email Already Exist, Please Try Again !!!'||response.data=='Try Again')
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
