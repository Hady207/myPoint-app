import {call, takeLatest, put} from 'redux-saga/effects';
import {CalendarTypes, CalendarActions} from './reducer';

export function* getAuthenticatedUser({userId, accessToken}) {
  try {
    console.log('startup');
  } catch (error) {
    console.log(error);
  }
}

export default function* rootScreenSaga() {
  yield takeLatest(CalendarTypes.CALENDAR_REQUEST, getAuthenticatedUser);
}
