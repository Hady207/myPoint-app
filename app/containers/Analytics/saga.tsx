import {call, takeLatest, put, select, all, delay} from 'redux-saga/effects';
import {AnalyticsActions, AnalyticsTypes} from './reducer';
import rootSelectors from '@containers/Root/selectors';
import {getOneStoreService} from '@services/stores';
import {
  getYearlyData,
  getHourlyData,
  getScanRatioData,
} from '@services/booking';

export function* getStore() {
  try {
    const {userProfile} = yield select(rootSelectors);
    const storeResponse = yield call(
      getOneStoreService,
      userProfile.storeAdmin,
    );
    // const yearlyResponse = yield call(getYearlyData, userProfile.storeAdmin);
    // const hourlyResponse = yield call(getHourlyData, userProfile.storeAdmin);
    // const scanRatioResponse = yield call(
    //   getScanRatioData,
    //   userProfile.storeAdmin,
    // );

    if (storeResponse.ok) {
      yield put(AnalyticsActions.storeRes(storeResponse.data));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* getAnalytics() {
  try {
    const {userProfile} = yield select(rootSelectors);

    const [yearlyResponse, hourlyResponse, scanRatioResponse] = yield all([
      call(getYearlyData, userProfile.storeAdmin),
      call(getHourlyData, userProfile.storeAdmin),
      call(getScanRatioData, userProfile.storeAdmin),
    ]);

    if (yearlyResponse.ok && hourlyResponse.ok && scanRatioResponse.ok) {
      yield put(
        AnalyticsActions.analyticsRes(
          yearlyResponse.data,
          hourlyResponse.data,
          scanRatioResponse.data[0],
        ),
      );

      yield put(AnalyticsActions.analyticsSuc());
    } else {
      yield put(AnalyticsActions.analyticsFail('something went wrong'));
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* analyticSaga() {
  yield takeLatest(AnalyticsTypes.GET_STORE, getStore);
  yield takeLatest(AnalyticsTypes.ANALYTICS_REQ, getAnalytics);
}
