import {createSelector, createStructuredSelector} from 'reselect';
import {initalState} from './reducer';

const myBookRootSelector = (state: any) => state.myBookings ?? initalState;

export const selectIsloading = () =>
  createSelector(myBookRootSelector, substate => substate.isLoading);

export const selectBookings = () =>
  createSelector(myBookRootSelector, substate => substate.bookingsData);

export const selectErrorMessage = () =>
  createSelector(myBookRootSelector, substate => substate.errorMessage);

const bookingSelectors = createStructuredSelector({
  isLoading: selectIsloading(),
  bookings: selectBookings(),
  errorMessage: selectErrorMessage(),
});

export default bookingSelectors;
