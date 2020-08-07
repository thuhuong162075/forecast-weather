import {all, call} from 'redux-saga/effects';
import watchingSearchSaga from './pages/search/saga';
import watchingForecastSaga from './pages/result/saga'

// theo doi tat ca cac saga
export default function* rootSaga() {
  yield all([
    call(watchingSearchSaga),
    call(watchingForecastSaga)
  ])
}