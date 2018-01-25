/** action types */
export const SET_NORRIS_CATEGORIES = 'SET_NORRIS_CATEGORIES';
export const SET_CURRENT_JOKE = 'SET_CURRENT_JOKE';

/** actions */

export function setNorrisCategories(categories) {
  return {
    type: SET_NORRIS_CATEGORIES,
    categories
  };
}

export function setCurrentJoke(joke) {
  return {
    type: SET_CURRENT_JOKE,
    joke
  };
}