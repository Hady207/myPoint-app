import {put, call, takeLatest} from 'redux-saga/effects';
import {creatingTicketService} from '@services/booking';
import {RootScreenActions} from '@containers/Root/reducer';
import {navigate} from '@utils/navigationUtils';
import {BookTypes, BookActions} from './reducer';

function* bookingSaga({storeId, date, time}) {
  try {
    const postBody = {date, time};

    const response = yield call(creatingTicketService, storeId, postBody);

    if (response.ok) {
      yield put(BookActions.bookResSuccess(response.data));
      yield put(RootScreenActions.latestBookInfo(response.data));
      yield call(navigate, 'QRcodeScreen');
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
