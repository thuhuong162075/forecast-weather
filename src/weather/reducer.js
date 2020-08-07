import {combineReducers} from 'redux'
import { persistReducer } from 'redux-persist'
//lưu trú state vào storage
import storage from 'redux-persist/lib/storage';
import SearchReducer from './pages/search/reducer'
import SearchForecastReducer from './pages/result/reducer'
const persistRootConfig = {
    key: 'root',
    storage: storage,
    blackList: ['loadingSearch', 'errorSearch','loadingForcast', 'errorForecast']
}
const persistSearchConfig = {
    key: 'searchWeather',
    storage: storage,
    whiteList: ['dataSearch']
}
const persistForecastConfig = {
    key: 'searchForecast',
    storage: storage,
    whiteList: ['dataForecast']
}

const rootReducer = combineReducers({
    searchWeather: persistReducer(persistSearchConfig, SearchReducer),
    searchForecast: persistReducer(persistForecastConfig, SearchForecastReducer )
})
export default persistReducer(persistRootConfig, rootReducer)
