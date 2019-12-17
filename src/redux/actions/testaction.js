import {TEST} from '../actions-types/';

export const testState = payload => {
  return {type: TEST, payload: payload};
};
