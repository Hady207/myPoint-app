import {fork} from 'redux-saga/effects';
import rootSaga from '@containers/Root/saga';

export default function* root() {
  yield fork(rootSaga);
}