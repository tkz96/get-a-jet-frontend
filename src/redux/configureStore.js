/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import addAeroplaneReducer from './aeroplanes/addAeroplanes';

const rootReducer = combineReducers({
  addAeroplanes: addAeroplaneReducer,
  /* add reducers here */
});

const store = configureStore({
  reducer: aeroplanesReducer,
  middleware: [thunk],
});

export default store;
