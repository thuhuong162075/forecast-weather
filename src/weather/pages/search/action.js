//action từ phía view user
export const SEARCH_WEATHER = 'SEARCH_WEATHER';
//action từ phía saga
export const LOADING_SEARCH_WEATHER = 'LOADING_SEARCH_WEATHER';
export const SEARCH_WEATHER_SUCCESS = 'SEARCH_WEATHER_SUCCESS';
export const SEARCH_WEATHER_FAILURE = 'SEARCH_WEATHER_FAILURE';

export const searchWeather = (nameCity) => ({
    type: SEARCH_WEATHER,
    nameCity: nameCity
})
export const loadingSearchWeather = (loading) => ({
    type: LOADING_SEARCH_WEATHER,
    loading
})
export const searchWeatherSuccess = (data) => ({
    type: SEARCH_WEATHER_SUCCESS,
    data
})
export const searchWeatherFail = (error) => ({
    type: SEARCH_WEATHER_FAILURE,
    error
})