import {createSelector, createStructuredSelector} from 'reselect';
import {monthsName} from '@utils/dateUtils';
import spacetime from 'spacetime';
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

export const selectDataListLoading = () =>
  createSelector(analyticsScreenSelector, substate => substate.dataListLoading);

export const selectBookingNumbers = () =>
  createSelector(analyticsScreenSelector, substate =>
    substate.adminStore?.bookings?.filter(
      (data: any) =>
        data?.bookingDate ===
        spacetime(new Date()).format('{year}-{iso-month}-{date-pad}'),
    ),
  );

export const selectYearlyData = () =>
  createSelector(analyticsScreenSelector, substate => {
    const labelsArr = [];
    const data = [];
    if (substate?.yearlyData?.length > 0) {
      substate?.yearlyData?.forEach((element: any) => {
        labelsArr.push(monthsName[element?.date?.month]);
        data.push(element?.total);
      });
      return {labels: labelsArr, datasets: [{data}]};
    }

    return null;
  });

export const selectHourlyData = () =>
  createSelector(analyticsScreenSelector, substate => {
    if (substate?.hourlyData?.length > 0) {
      return substate?.hourlyData?.map(hd => ({
        name: hd?.hours,
        total: hd?.total,
        color: hd?.hours === 'morning' ? '#ffffff' : 'rgba(131, 167, 234, 1)',
        legendFontColor: Colors.background,
        legendFontSize: 15,
      }));
    }
    return null;
  });

export const selectRatioData = () =>
  createSelector(analyticsScreenSelector, substate => {
    if (substate?.ratioData?.scannedTotal) {
      const re = [];
      re[0] = {
        name: 'Scanned',
        total: substate?.ratioData?.scannedTotal,
        color: '#ffffff',
        legendFontColor: Colors.background,
        legendFontSize: 15,
      };
      re[1] = {
        name: 'Not Scanned',
        total: substate?.ratioData?.unscannedTotal,
        color: 'rgba(131, 167, 234, 1)',
        legendFontColor: Colors.background,
        legendFontSize: 15,
      };
      return re;
    }
    return null;
  });

const analyticsSelectors = createStructuredSelector({
  isLoading: selectIsloading(),
  store: selectStore(),
  bookings: selectBooking(),
  dataListLoading: selectDataListLoading(),
  yearlyData: selectYearlyData(),
  hourlyData: selectHourlyData(),
  ratioData: selectRatioData(),
  bookingNumbers: selectBookingNumbers(),
});

export default analyticsSelectors;
