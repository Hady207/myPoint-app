import {call, takeLatest, put, delay} from 'redux-saga/effects';
import {ScannerActions, ScannerTypes} from './reducer';
import {scanTicketService} from '@services/booking';

export function* scanBarcodeSaga(action) {
  try {
    const postBody = {id: action.scanBody};
    const response = yield call(scanTicketService, postBody);

    if (response.ok) {
      yield put(ScannerActions.scanBarcodeSuccess('QR code Scanned'));
    } else {
      yield put(ScannerActions.scanBarcodeFail('Unauthorized Scan'));
    }
    yield delay(2000);
    yield put(ScannerActions.hideModal());
  } catch (error) {
    console.log(error);
  }
}

export default function* qrScannerSaga() {
  yield takeLatest(ScannerTypes.SCAN_BARCODE, scanBarcodeSaga);
}
