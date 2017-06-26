import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedRecipes = createReducer({}, {
  [types.SET_SEARCHED_RECIPES](state, action) {
    let newState = {}
    action.recipes.forEach( (recipe) => {
      let id = recipe.href
      newState[id] = Object.assign({}, recipe, { id });
    });
    return newState;
  },
});

export const recipeCount = createReducer(0,{
  [types.ADD_RECIPE](state, action) {
    return state + 1;
  }
});