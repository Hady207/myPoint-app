import {put, call, takeLatest} from 'redux-saga/effects';
import {getStoresService} from '@services/stores';

import {HomeTypes, HomeActions} from './reducer';

function* homePageSettingSaga() {
  try {
    const response = yield call(getStoresService);

    console.log(response);

    if (response.ok) {
      yield put(HomeActions.getHomeDataSuccess(response.data));
    } else {
      yield put(HomeActions.getHomeDataFailed(response.data?.error.message));
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* homeRootSagaWatcher() {
  //   yield takeLatest(HomeTypes.HOME_REFRESH, homeRefreshSaga);
  yield takeLatest(HomeTypes.GET_HOME_DATA, homePageSettingSaga);
}
