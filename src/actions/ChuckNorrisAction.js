/** action types */
export const SET_NORRIS_CATEGORIES = 'SET_NORRIS_CATEGORIES';

/** actions */

export function setNorrisCategories(categories) {
  return {
    type: SET_NORRIS_CATEGORIES,
    categories
  };
}