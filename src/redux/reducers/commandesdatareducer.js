import {FETCHCOMMANDESDATA,FETCHCOMMANDESDATASUCCESSFUL,FETCHCOMMANDESDATAFAIL} from '../actions-types';
const initialState = {
  commandes: [],
  ids: [],
  adresssources: [],
  error: '',
  loading: false,
};
const commandesDataReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case FETCHCOMMANDESDATA: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCHCOMMANDESDATASUCCESSFUL: {
      return {
        ...state,
        commandes: action.payload[2].proddata,
        ids:action.payload[1].commandedata,
        adresssources:action.payload[0].vendeurdata,
        loading: false,
      };
    }
    case FETCHCOMMANDESDATAFAIL: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
export default commandesDataReducer;
