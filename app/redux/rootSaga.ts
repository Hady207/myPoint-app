import {fork} from 'redux-saga/effects';
import rootSaga from '@containers/Root/saga';
import homeSaga from '@containers/Home/saga';
import loginSaga from '@containers/Authentication/Login/saga';
import signupSaga from '@containers/Authentication/Signup/saga';

export default function* root() {
  yield fork(rootSaga);
  yield fork(homeSaga);
  yield fork(loginSaga);
  yield fork(signupSaga);
}
