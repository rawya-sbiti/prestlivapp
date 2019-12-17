// Imports: Dependencies
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import ReduxThunk from 'redux-thunk';

// Imports: Redux
import rootReducer from '../reducers/index';
// Middleware: Redux Persist Config
const sagaMiddleware = createSagaMiddleware();
let middleware;
if (__DEV__) {
  middleware = applyMiddleware(sagaMiddleware, createLogger(), ReduxThunk);
} else {
  middleware = applyMiddleware(sagaMiddleware, ReduxThunk);
}
const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: [

  ],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [

  ],
};
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Redux: Store
const store = createStore(
  persistedReducer,
   middleware
);
// Middleware: Redux Persist Persister
let persistor = persistStore(store);
// Exports
export {
  store,
  persistor,
};
