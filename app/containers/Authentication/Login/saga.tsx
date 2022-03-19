import {put, call, takeLatest} from 'redux-saga/effects';

import {storageWrite} from '@utils/storageUtils';
import {navigate, navigateBack} from '@utils/navigationUtils';
import {RootScreenActions} from '@containers/Root/reducer';
import {loginService} from '@services/auth';
import {LoginTypes, LoginActions} from './reducer';

function* loginSaga(action: any) {
  try {
    const postBody = {username: action.username, password: action.password};

    const response = yield call(loginService, postBody);

    console.log(response);

    if (response.ok) {
      yield call(
        storageWrite,
        'accessToken',
        response.data?.token?.accessToken,
      );
      yield call(storageWrite, 'userId', response.data?.user._id);
      yield put(
        RootScreenActions.signIn(response.data?.user, response.data?.token),
      );

      yield put(LoginActions.loginSuccess());

      if (action.params) {
        yield call(navigateBack);
      }
    } else if (response.data.error.message === 'login failed') {
      yield put(LoginActions.loginFail('login_failed'));
      // const fcrash = yield call(crashlytics);
      // console.log(fcrash);
      // yield call(() => crashlytics().log(response.data.error.message));

      // yield call(fcrash.log, response.data.error.message);
      // crashlytics().log(response.data.error.message);
    } else {
      yield put(LoginActions.loginFail(response.data.error.message));
      // crashlytics().log(response.data.error.message);
    }
  } catch (error) {
    yield put(LoginActions.loginFail(error.message));
  }
}

export default function* loginRootWacher() {
  yield takeLatest(LoginTypes.REQUEST_LOGIN, loginSaga);
  //   yield takeLatest(LoginTypes.REQUEST_BIO_LOGIN, bioLoginSaga);
}
