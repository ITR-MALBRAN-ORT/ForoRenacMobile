import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
//Slices
import casesReducer from './slices/Cases';
import caseReducer from './slices/Case';
import authReducer from './slices/Auth';
import periodReducer from './slices/Period';
import draftReducer from './slices/Draft';
import maternitiesReducer from './slices/Maternities';

//Persistance
import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['cases'],
};



const reducers = combineReducers({
  auth: authReducer,
  cases: casesReducer,
  case: caseReducer,
  period: periodReducer,
  draft: draftReducer,
  maternities: maternitiesReducer,
});



const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares = [thunk];

export const store = configureStore(
  {
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  },
  applyMiddleware(...middlewares),
);




