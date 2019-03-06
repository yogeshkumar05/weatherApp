import {fork} from 'redux-saga/effects';
import rootSaga from './weatherSaga';

export default function* () {
    yield fork(rootSaga);
  }