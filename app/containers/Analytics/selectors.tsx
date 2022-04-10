import {createSelector, createStructuredSelector} from 'reselect';
import {monthsName} from '@utils/dateUtils';
import {Colors} from '@styles/index';
import {initialState} from './reducer';

const analyticsScreenSelector = (state: any) => state.analytics ?? initialState;

export const selectIsloading = () =>
  createSelector(analyticsScreenSelector, substate => substate.isLoading);

export const selectStore = () =>
  createSelector(analyticsScreenSelector, substate => substate.adminStore);

export const selectBooking = () =>
  createSelector(
    analyticsScreenSelector,
    substate => substate.adminStore?.bookings,
  );

export const selectYearlyData = () =>
  createSelector(analyticsScreenSelector, substate => {
    const labelsArr = [];
    const data = [];
    substate.yearlyData.forEach((element: any) => {
      labelsArr.push(monthsName[element.date.month]);
      data.push(element.total);
    });
    return {labels: labelsArr, datasets: [{data}]};
  });

export const selectHourlyData = () =>
  createSelector(analyticsScreenSelector, substate =>
    substate.hourlyData.map(hd => ({
      name: hd?.hours,
      total: hd?.total,
      color: hd?.hours === 'morning' ? 'green' : 'red',
      legendFontColor: Colors.background,
      legendFontSize: 15,
    })),
  );

const analyticsSelectors = createStructuredSelector({
  isLoading: selectIsloading(),
  store: selectStore(),
  bookings: selectBooking(),
  yearlyData: selectYearlyData(),
  hourlyData: selectHourlyData(),
});

export default analyticsSelectors;
