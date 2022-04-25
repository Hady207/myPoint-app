import {createSelector, createStructuredSelector} from 'reselect';
import spacetime from 'spacetime';
import {Colors} from '@styles/index';
import {initalState} from './reducer';

const analyticsScreenSelector = (state: any) => state.analytics ?? initalState;
const calendarRootSelector = (state: any) => state.calendar ?? initalState;

export const selectIsloading = () =>
  createSelector(calendarRootSelector, substate => substate.isLoading);

export const selectErrorMessage = () =>
  createSelector(calendarRootSelector, substate => substate.errorMessage);

export const selectCalendar = () =>
  createSelector(analyticsScreenSelector, substate => {
    const dates = {};
    substate?.adminStore?.bookings.forEach(
      (d: any) =>
        (dates[
          spacetime(d.bookingDate).format('{year}-{iso-month}-{date-pad}')
        ] = {
          selected: true,
          selectedColor: Colors.primaryColor,
        }),
    );
    return dates;
  });

export const selectBookings = () =>
  createSelector(
    analyticsScreenSelector,
    substate => substate?.adminStore?.bookings,
  );

const bookingSelectors = createStructuredSelector({
  isLoading: selectIsloading(),
  errorMessage: selectErrorMessage(),
  calendarDates: selectCalendar(),
  bookings: selectBookings(),
});

export default bookingSelectors;
