import {ChuckNorrisAction} from '../actions';

export const initialChuckNorrisState = {
  categories: [],
  isLoadingJoke: false,
  currentJoke: null,
  activeCategory: ''
};

const ChuckNorrisReducer = (state = initialChuckNorrisState, action) => {
  if (!action) return state;

  switch (action.type) {
    case ChuckNorrisAction.SET_NORRIS_CATEGORIES: {
      action.categories.sort();
      return Object.assign({}, state, {categories: action.categories});
    }

    case ChuckNorrisAction.SET_IS_LOADING_JOKE: {
      return Object.assign({}, state, {isLoadingJoke: true});
    }

    case ChuckNorrisAction.SET_CURRENT_JOKE: {
      return Object.assign({}, state, {currentJoke: action.joke, isLoadingJoke: false});
    }

    case ChuckNorrisAction.SET_ACTIVE_CATEGORY: {
      return Object.assign({}, state, {activeCategory: action.category});
    }

    default: {
      return state;
    }
  }
};

export default ChuckNorrisReducer;
