import {combineReducers} from 'redux';
import test from './testReducer';
import livreurDataReducer from './livreurdatareducer';
import pickerDataReducer from './picherdatareducer';
const reducer = combineReducers({
  test:test,
  livreur:livreurDataReducer,
  pickerdata:pickerDataReducer
});
export default reducer;
