import {combineReducers, createStore } from 'redux';
import Beats from '../data/beats.json'
import playReducer from './playReducer';



const initialState = {
    ...Beats
}

const reducers = {
	play: playReducer
};

Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// merge all reducers
const storeReducer = combineReducers(reducers);

// create store
const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;