import {call, takeLatest, put} from 'redux-saga/effects';
import {ScannerActions, ScannerTypes} from './reducer';
import {scanTicketService} from '@services/booking';

export function* scanBarcodeSaga(action) {
  try {
    console.log(action);
    const response = yield call(scanTicketService);
    if (response.ok) {
      yield put(ScannerActions.scanBarcodeSuccess());
    } else {
      yield put(ScannerActions.scanBarcodeFail());
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* qrScannerSaga() {
  yield takeLatest(ScannerTypes.SCAN_BARCODE, scanBarcodeSaga);
}
