/** action types */
export const SET_NORRIS_CATEGORIES = 'SET_NORRIS_CATEGORIES';
export const SET_IS_LOADING_JOKE = 'SET_IS_LOADING_JOKE';
export const SET_CURRENT_JOKE = 'SET_CURRENT_JOKE';

/** actions */

export function setNorrisCategories(categories) {
  return {
    type: SET_NORRIS_CATEGORIES,
    categories
  };
}

export function setIsLoadingJoke() {
  return {
    type: SET_IS_LOADING_JOKE
  };
}

export function setCurrentJoke(joke) {
  return {
    type: SET_CURRENT_JOKE,
    joke
  };
}