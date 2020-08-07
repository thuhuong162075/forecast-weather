import { createSelector } from 'reselect';

const rootState = state => state.searchWeather;
export const loadingSearchWeather = createSelector(
  rootState,
  item => item.loadingSearch
);

export const dataSearchWeather = createSelector(
  rootState,
  item => item.dataSearch 
);


