import {combineReducers} from 'redux';
import test from './testReducer';
import livreurDataReducer from './livreurdatareducer';
import pickerDataReducer from './picherdatareducer';
import commandesDataReducer from './commandesdatareducer';
const reducer = combineReducers({
  test:test,
  livreur:livreurDataReducer,
  pickerdata:pickerDataReducer,
  commandes:commandesDataReducer,
});
export default reducer;
