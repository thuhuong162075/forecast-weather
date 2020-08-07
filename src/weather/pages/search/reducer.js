import * as Types from './action'
const initialState = {
    loadingSearch: false,
    dataSearch: {},
    errorSearch: null
}

const SearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.LOADING_SEARCH_WEATHER: {
            return {
                ...state,
                ...{
                    loadingSearch: action.loading
                }
            }
        }
        case Types.SEARCH_WEATHER_SUCCESS: {
            return {
                ...state,
                ...{
                    loadingSearch: false,
                    dataSearch: action.data,
                    errorSearch: null
                }
            }
        }
        case Types.SEARCH_WEATHER_FAILURE: {
            return {
                ...state,
                ...{
                    loadingSearch: false,
                    dataSearch: {},
                    error: action.error
                }
            }
        }
        default: return state
    }
}
export default SearchReducer;