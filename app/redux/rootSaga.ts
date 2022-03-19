import {fork} from 'redux-saga/effects';
import rootSaga from '@containers/Root/saga';
import homeSaga from '@containers/Home/saga';

export default function* root() {
  yield fork(rootSaga);
  yield fork(homeSaga);
}
