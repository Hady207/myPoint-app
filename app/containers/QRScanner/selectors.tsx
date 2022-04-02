import {createSelector, createStructuredSelector} from 'reselect';
import {initialState} from './reducer';

const qrScannerSelector = state => state.qrScanner ?? initialState;

export const selectIsloading = () =>
  createSelector(qrScannerSelector, substate => substate.isLoading);

export const selectSuccessMessage = () =>
  createSelector(qrScannerSelector, substate => substate.successMessage);

export const selectErrorMessage = () =>
  createSelector(qrScannerSelector, substate => substate.errorMessage);

const rootSelectors = createStructuredSelector({
  isLoading: selectIsloading(),
  succcessMessage: selectSuccessMessage(),
  errorMessage: selectErrorMessage(),
});

export default rootSelectors;
