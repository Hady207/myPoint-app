import {put, call, takeLatest} from 'redux-saga/effects';

import {signupService} from '@services/auth';

import {navigate, navigateBack} from '@utils/navigationUtils';
import {storageWrite} from '@utils/storageUtils';

import {RootScreenActions} from '@containers/Root/reducer';
import {SignupActions, SignupTypes} from './reducer';

// regular server signup saga
function* signUpSaga({username, password}) {
  try {
    const postBody = {
      username,
      password,
    };

    const response = yield call(signupService, postBody);

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
      yield call(navigate, 'Home');
      yield put(SignupActions.signupRequestSuccess());
    } else {
      yield put(SignupActions.signupRequestFail(response.data.message));
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* signupRootSagaWatcher() {
  yield takeLatest(SignupTypes.REQUEST_SIGNUP, signUpSaga);
}
