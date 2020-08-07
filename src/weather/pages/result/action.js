//action từ phía view user
export const SEARCH_FORECAST = 'SEARCH_FORECAST';
//action từ phía saga
export const LOADING_SEARCH_FORECAST = 'LOADING_SEARCH_FORECAST';
export const SEARCH_FORECAST_SUCCESS = 'SEARCH_FORECAST_SUCCESS';
export const SEARCH_FORECAST_FAILURE = 'SEARCH_FORECAST_FAILURE';

export const searchForecast = (nameCity) => ({
    type: SEARCH_FORECAST,
    nameCity: nameCity
})
export const loadingSearchForecast = (loading) => ({
    type: LOADING_SEARCH_FORECAST,
    loading
})
export const searchForecastSuccess = (data) => ({
    type: SEARCH_FORECAST_SUCCESS,
    data
})
export const searchForecastFail = (error) => ({
    type: SEARCH_FORECAST_FAILURE,
    error
})

