import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

import rootReducer from "./reducers/index";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
      'authReducer',
      'modules',
      'students',
    ],
    blacklist: [
      'ta',
      'teams',
    ],
  };
  
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    applyMiddleware(
        thunk,
        createLogger(),
    ),
);

const persistor = persistStore(store);

export {
  store,
  persistor,
};