import {FETCHCOMMANDESDATA,FETCHCOMMANDESDATASUCCESSFUL,FETCHCOMMANDESDATAFAIL} from '../actions-types';
import axios from 'axios';
export const fetchcommandes = () => {
  return dispatch => {
    dispatch({type: FETCHCOMMANDESDATA});
    axios.get('http://mechria.com/server/commandedetail.php').
    then(response =>{
      if(response.data=='No Results Found')
      fetchcommandesFail(dispatch, response.data);
      else
      {
      fetchcommandesSuccess(dispatch, response.data);
       console.log(response.data[2]);
     }
    })
    .catch((error) => {
      fetchcommandesFail(dispatch, response.data);
       console.log("axios error:",error);
    });
  }
}

export const fetchcommandesFail = (dispatch, error) => {
  return dispatch({
    type: FETCHCOMMANDESDATAFAIL,
    payload: error,
  });
};
export const  fetchcommandesSuccess = (dispatch, commandes) => {
  return dispatch({
    type: FETCHCOMMANDESDATASUCCESSFUL,
    payload: commandes,
  });
};
