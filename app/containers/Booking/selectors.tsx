import {createSelector, createStructuredSelector} from 'reselect';
import {initalState} from './reducer';

const bookRootSelector = (state: any) => state.booking ?? initalState;

export const selectIsloading = () =>
  createSelector(bookRootSelector, substate => substate.isLoading);

export const selectErrorMessage = () =>
  createSelector(bookRootSelector, substate => substate.errorMessage);

const bookingSelectors = createStructuredSelector({
  isLoading: selectIsloading(),
  errorMessage: selectErrorMessage(),
});

export default bookingSelectors;
