import {call, takeLatest, put, select} from 'redux-saga/effects';
import {AnalyticsActions, AnalyticsTypes} from './reducer';
import rootSelectors from '@containers/Root/selectors';
import {getOneStoreService} from '@services/stores';
import {getYearlyData, getHourlyData} from '@services/booking';

export function* getStore() {
  try {
    const {userProfile} = yield select(rootSelectors);
    const storeResponse = yield call(
      getOneStoreService,
      userProfile.storeAdmin,
    );
    const yearlyResponse = yield call(getYearlyData, userProfile.storeAdmin);
    const hourlyResponse = yield call(getHourlyData, userProfile.storeAdmin);

    if (storeResponse.ok) {
      yield put(
        AnalyticsActions.storeRes(
          storeResponse.data,
          yearlyResponse.data,
          hourlyResponse.data,
        ),
      );
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* analyticSaga() {
  yield takeLatest(AnalyticsTypes.GET_STORE, getStore);
}
