import {put, call, takeLatest} from 'redux-saga/effects';
import {getBookedTickets} from '@services/booking';

import {MyBookingsTypes, MyBookingsActions} from './reducer';

function* myBookingSaga() {
  try {
    const response = yield call(getBookedTickets);

    if (response.ok) {
      yield put(MyBookingsActions.myBookResSuccess(response.data.result));
    } else {
      yield put(MyBookingsActions.myBookResFail(response.data?.error.message));
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* myBookingSagaWatcher() {
  //   yield takeLatest(HomeTypes.HOME_REFRESH, homeRefreshSaga);
  yield takeLatest(MyBookingsTypes.MY_BOOK_REQ, myBookingSaga);
}
