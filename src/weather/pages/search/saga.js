import { call, put, takeLatest } from 'redux-saga/effects';
import {
    loadingSearchWeather,
    searchWeatherSuccess,
    searchWeatherFail,
    SEARCH_WEATHER
} from './action'
import { api } from '../../service/api';

function* searchWeatherSaga({nameCity}) {
    try {
        yield put(loadingSearchWeather(true));
        const weather = yield call(api.searchWeatherApi,nameCity);
        if(typeof weather === "object") {
            yield put(searchWeatherSuccess(weather));
        } else {
            yield put(searchWeatherFail('not found data'));
        }
    } catch (e) {
        console.log(e);
    }
}
export default function* watchingSearchSaga() {
    yield takeLatest(SEARCH_WEATHER, searchWeatherSaga)
}