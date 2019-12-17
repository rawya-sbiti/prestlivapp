import {FETCHCODESPOSTALESACTION} from '../actions-types';
import axios from 'axios';
export const fetchcodespostales = () => {
  return dispatch => {
    axios.get('http://mechria.com/server/city.php').
    then(response =>{
      dispatch({type: FETCHCODESPOSTALESACTION,payload:response.data.codespostales});

    });
  }
}
