import {TEST} from '../actions-types/';
const initialState = {
  test: false,
};
const test = (state = initialState, action) => {
  switch (action.type) {
    case TEST: {
      return {
        ...state,
        test: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
export default test;
