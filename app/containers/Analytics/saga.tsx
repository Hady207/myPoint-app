import {call, takeLatest, put} from 'redux-saga/effects';
import {AnalyticsActions, AnalyticsTypes} from './reducer';

export function* getAuthenticatedUser({userId, accessToken}) {
  try {
    console.log('startup');
  } catch (error) {
    console.log(error);
  }
}

export default function* analyticSaga() {
  yield takeLatest(AnalyticsTypes.START_UP, getAuthenticatedUser);
}
