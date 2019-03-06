import "regenerator-runtime/runtime";
import { put, takeLatest, all } from 'redux-saga/effects';
import mockData from '../data/mockData.json';

function* fetchWeatherSaga(action) {
  const {zipcode} = action.payload;
  console.log(zipcode);
    // const apiResponse = yield fetch('https://samples.openweathermap.org/data/2.5/forecast?zip=94040&appid=b6907d289e10d714a6e88b30761fae22')
    //     .then(response => response.json); 
  const weatherData = mockData;
  console.log(weatherData);
  const zipData = weatherData.filter((item) => item.zip === zipcode);
  console.log(zipData);
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