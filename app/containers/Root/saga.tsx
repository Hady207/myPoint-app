import {call, takeLatest, put} from 'redux-saga/effects';
import {RootScreenActions, RootScreenTypes} from './reducer';

export function* getAuthenticatedUser({userId}) {
  try {
    console.log('startup');
  } catch (error) {
    // console.log(error);
  }
}

export default function* rootScreenSaga() {
  yield takeLatest(RootScreenTypes.START_UP, getAuthenticatedUser);
}
