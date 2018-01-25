import {ChuckNorrisAction} from '../actions';

export const initialChuckNorrisState = {
  categories: [],
  currentJoke: {},
};

const ChuckNorrisReducer = (state = initialChuckNorrisState, action) => {
  if (!action) return state;

  switch (action.type) {
    case ChuckNorrisAction.SET_NORRIS_CATEGORIES: {
      action.categories.sort();
      return Object.assign({}, state, {categories: action.categories});
    }

    case ChuckNorrisAction.SET_CURRENT_JOKE: {
      return Object.assign({}, state, {currentJoke: action.joke});
    }

    default: {
      return state;
    }
  }
};

export default ChuckNorrisReducer;
