import {put, call, takeLatest} from 'redux-saga/effects';
import {creatingTicketService} from '@services/booking';

import {BookTypes, BookActions} from './reducer';

function* bookingSaga({storeId, date, time}) {
  try {
    const postBody = {date, time};
    console.log(postBody);
    const response = yield call(creatingTicketService, storeId, postBody);
    console.log(response);

    if (response.ok) {
      yield put(BookActions.bookResSuccess(response.data));
    } else {
      yield put(BookActions.bookResFail(response.data?.error.message));
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* bookingSagaWatcher() {
  //   yield takeLatest(HomeTypes.HOME_REFRESH, homeRefreshSaga);
  yield takeLatest(BookTypes.BOOK_REQ, bookingSaga);
}
