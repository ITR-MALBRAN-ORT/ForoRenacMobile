import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

//Slices
import casesReducer from './slices/Cases';
import caseReducer from './slices/Case';
import authReducer from './slices/Auth';
import periodReducer from './slices/Period';

const middlewares = [thunk];

export const store = configureStore(
  {
    reducer: {
      auth: authReducer,
      cases: casesReducer,
      case: caseReducer,
      period: periodReducer
    },
  },
  applyMiddleware(...middlewares),
);
