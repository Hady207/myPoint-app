import {createActions} from 'reduxsauce';

export const {Types: ScannerTypes, Creators: ScannerActions} = createActions({
  scanBarcode: ['scanBody'],
  scanBarcodeSuccess: ['successMessage'],
  scanBarcodeFail: ['errorMessage'],
  clearScanMessage: null,
});

export const initialState = {
  isLoading: false,
  successMessage: null,
  errorMessage: null,
};

export const rootScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case ScannerTypes.SCAN_BARCODE:
      return {...state, isLoading: true};

    case ScannerTypes.SCAN_BARCODE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        successMessage: action.successMessage,
      };

    case ScannerTypes.SCAN_BARCODE_FAIL:
      return {...state, isLoading: false, errorMessage: action.errorMessage};

    case ScannerTypes.CLEAR_SCAN_MESSAGE:
      return initialState;

    default:
      return state;
  }
};
