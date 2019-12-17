import {FETCHREGUINACTION} from '../actions-types';
import axios from 'axios';
export const fetchregion = () => {
  return dispatch => {
    axios.get('http://mechria.com/server/country.php').
    then(response =>{
      dispatch({type: FETCHREGUINACTION,payload:response.data.Orders});

    });
  }
}
