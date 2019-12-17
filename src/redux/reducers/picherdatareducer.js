import {FETCHREGUINACTION,FETCHVILLESACTION,FETCHCODESPOSTALESACTION} from '../actions-types';
const initialState = {
  regions: [],
  villes: [],
  codespostales: [],
};
const pickerDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHREGUINACTION: {
      return {
        ...state,
        regions: action.payload,
      };
    }
    case FETCHVILLESACTION: {
      return {
        ...state,
        villes: action.payload,
      };
    }
    case FETCHCODESPOSTALESACTION: {
      return {
        ...state,
        codespostales: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
export default pickerDataReducer;
