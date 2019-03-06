import "regenerator-runtime/runtime";
import { put, takeLatest, all } from 'redux-saga/effects';
import mockData from '../data/mockData.json';

function* fetchWeatherSaga(action) {
  const {zipcode} = action.payload;
  const weatherData = mockData;
  const zipData = weatherData.filter((item) => item.zip === zipcode);
  yield put({ type: "WEATHER_RECEIVED", data: zipData[0]});
}
function* actionWatcher() {
     yield takeLatest('FETCH_WEATHER', fetchWeatherSaga)
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}