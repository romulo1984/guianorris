import {ChuckNorrisAction} from '../actions';

export const initialChuckNorrisState = {
  categories: [],
};

const ChuckNorrisReducer = (state = initialChuckNorrisState, action) => {
  if (!action) return state;

  switch (action.type) {
    case ChuckNorrisAction.SET_NORRIS_CATEGORIES: {
      action.categories.sort()
      return Object.assign({}, state, {categories: action.categories});
    }

    default: {
      return state;
    }
  }
};

export default ChuckNorrisReducer;
