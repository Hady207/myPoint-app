import {put, call, takeLatest} from 'redux-saga/effects';
import {getCategoryStoreService} from '@services/stores';

import {CategoryTypes, CategoryActions} from './reducer';

function* categorySaga({category}) {
  try {
    const response = yield call(getCategoryStoreService, category);

    if (response.ok) {
      yield put(CategoryActions.getCategoryDataSuccess(response.data));
    } else {
      yield put(
        CategoryActions.getCategoryDataFailed(response.data?.error.message),
      );
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* categorySagaWatcher() {
  //   yield takeLatest(HomeTypes.HOME_REFRESH, homeRefreshSaga);
  yield takeLatest(CategoryTypes.GET_CATEGORY_DATA, categorySaga);
}
