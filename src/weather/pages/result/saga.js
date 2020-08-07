import { call, put, takeLatest } from 'redux-saga/effects';
import {
    loadingSearchForecast,
    searchForecastSuccess,
    searchForecastFail,
    SEARCH_FORECAST
} from './action'
import { api } from '../../service/api';

function* searchForecastSaga({nameCity}) {
    try {
        yield put(loadingSearchForecast(true));
        const forecast = yield call(api.searchForecastApi,nameCity);
        if(forecast) {
            yield put(searchForecastSuccess(forecast));
        } else {
            yield put(searchForecastFail('not found data'));
        }
    } catch (e) {
        console.log(e);
    }
}
export default function* watchingForecastSaga() {
    yield takeLatest(SEARCH_FORECAST, searchForecastSaga)
}