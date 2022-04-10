import {createActions} from 'reduxsauce';

export const {Types: ScannerTypes, Creators: ScannerActions} = createActions({
  scanBarcode: ['scanBody'],
  scanBarcodeSuccess: ['successMessage'],
  scanBarcodeFail: ['errorMessage'],
  toggleShowModal: null,
  clearScanMessage: null,
  hideModal: null,
});

export const initialState = {
  isLoading: false,
  successMessage: null,
  errorMessage: null,
  showModal: false,
};

export const qrScannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ScannerTypes.SCAN_BARCODE:
      return {...state, isLoading: true};

    case ScannerTypes.SCAN_BARCODE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        successMessage: action.successMessage,
      };

    case ScannerTypes.TOGGLE_SHOW_MODAL:
      return {...state, showModal: !state.showModal};

    case ScannerTypes.SCAN_BARCODE_FAIL:
      return {
        ...state,
        isLoading: false,
        successMessage: null,
        errorMessage: action.errorMessage,
      };

    case ScannerTypes.HIDE_MODAL:
      return {...state, isLoading: false, showModal: false};

    case ScannerTypes.CLEAR_SCAN_MESSAGE:
      return initialState;

    default:
      return state;
  }
};
