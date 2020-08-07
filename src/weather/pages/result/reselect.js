import { createSelector } from 'reselect';

const rootState = state => state.searchForecast;

export const loadingSearchForecast = createSelector(
  rootState,
  item => item.loadingForecast
);

export const dataSearchForecast = createSelector(
  rootState,
  item => item.dataForecast
);
