import {
  LOGINLIVREUR,
  LOGINUSERSUCCESS,
  LOGINUSERFAIL,REGISTERLIVREUR
} from '../actions-types';

const initialState = {
  livreur: null,
  error: '',
  loading: false,
};
const livreurDataReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case LOGINLIVREUR: {
      return {
        ...state,
        loading: true,
      };
    }
    case REGISTERLIVREUR: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGINUSERSUCCESS: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case LOGINUSERFAIL: {
      return {
        ...state,
        livreur: action.payload,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
export default livreurDataReducer;
