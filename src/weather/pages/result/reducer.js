import * as Types from './action'
const initialState = {
    loadingForecast: false,
    dataForecast: {},
    errorForecast: null
}

const SearchForecastReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.LOADING_SEARCH_FORECAST: {
            return {
                ...state,
                ...{
                    loadingForecast: action.loading
                }
            }
        }
        case Types.SEARCH_FORECAST_SUCCESS: {
            return {
                ...state,
                ...{
                    loadingForecast: false,
                    dataForecast: action.data,
                    errorForecast: null
                }
            }
        }
        case Types.SEARCH_FORECAST_FAILURE: {
            return {
                ...state,
                ...{
                    loadingForecast: false,
                    dataForecast: {},
                    errorForecast: action.error
                }
            }
        }
        default: return state
    }
}
export default SearchForecastReducer;