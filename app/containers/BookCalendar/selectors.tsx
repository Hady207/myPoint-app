import {createSelector, createStructuredSelector} from 'reselect';
import {initalState} from './reducer';

const calendarRootSelector = (state: any) => state.calendar ?? initalState;

export const selectIsloading = () =>
  createSelector(calendarRootSelector, substate => substate.isLoading);

export const selectErrorMessage = () =>
  createSelector(calendarRootSelector, substate => substate.errorMessage);

const bookingSelectors = createStructuredSelector({
  isLoading: selectIsloading(),
  errorMessage: selectErrorMessage(),
});

export default bookingSelectors;
