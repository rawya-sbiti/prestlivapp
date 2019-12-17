import {FETCHVILLESACTION} from '../actions-types';
import axios from 'axios';
export const fetchvilles = () => {
  return dispatch => {
    axios.get('http://mechria.com/server/state.php').
    then(response =>{
      dispatch({type: FETCHVILLESACTION,payload:response.data.cities});

    });
  }
}
