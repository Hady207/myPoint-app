import {put, call, takeLatest} from 'redux-saga/effects';

import {storageWrite} from '@utils/storageUtils';
import {navigate} from '@utils/navigationUtils';
import {RootScreenActions} from '@containers/Root/reducer';
import {loginService} from '@services/auth';
import {LoginTypes, LoginActions} from './reducer';

function* loginSaga(action: any) {
  try {
    const postBody = {username: action.username, password: action.password};

    const response = yield call(loginService, postBody);

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
      yield call(navigate, 'Home');
    } else {
      yield put(LoginActions.loginFail(response.data.message));
      // crashlytics().log(response.data.error.message);
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* loginRootWacher() {
  yield takeLatest(LoginTypes.REQUEST_LOGIN, loginSaga);
  //   yield takeLatest(LoginTypes.REQUEST_BIO_LOGIN, bioLoginSaga);
}
