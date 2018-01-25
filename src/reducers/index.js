import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import chucknorris, {initialChuckNorrisState} from './ChuckNorrisReducer';
export const chuckNorrisState = initialChuckNorrisState;

export const fullInitialState = {
  chucknorris: chuckNorrisState,
};

export const ChuckNorrisReducer = chucknorris;

const appReducer = combineReducers({
  routing: routerReducer,
  chucknorris,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
