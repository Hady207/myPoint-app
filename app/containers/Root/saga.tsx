import {call, takeLatest} from 'redux-saga/effects';
import {fcmService} from '@services/auth';
import messaging from '@react-native-firebase/messaging';
import {RootScreenTypes} from './reducer';
import {storageDelete} from '@utils/storageUtils';

export function* getAuthenticatedUser({userId, accessToken}) {
  try {
    console.log('startup');
  } catch (error) {
    console.log(error);
  }
}

export function* saveFCMToken({userId, fcm}) {
  try {
    yield call(fcmService, userId, {fcmToken: fcm});
  } catch (error) {
    console.log(error);
  }
}

export function* clearStorageSaga() {
  try {
    yield messaging().deleteToken();
    yield call(storageDelete, 'accessToken');
    yield call(storageDelete, 'userId');
  } catch (error) {
    console.log(error);
  }
}

export default function* rootScreenSaga() {
  yield takeLatest(RootScreenTypes.RESTORE_USER, getAuthenticatedUser);
  yield takeLatest(RootScreenTypes.SAVE_FCM, saveFCMToken);
  yield takeLatest(RootScreenTypes.SIGN_OUT, clearStorageSaga);
}
