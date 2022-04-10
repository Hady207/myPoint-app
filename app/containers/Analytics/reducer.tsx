import {createActions} from 'reduxsauce';

export const {Types: AnalyticsTypes, Creators: AnalyticsActions} =
  createActions({
    getStore: null,
    storeRes: ['store', 'yearlyData', 'hourlyData'],
  });

export const initialState = {
  isLoading: false,
  adminStore: null,
  errorMessage: null,
  yearlyData: null,
  hourlyData: null,
};

export const analyticsScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case AnalyticsTypes.GET_STORE:
      return {...state, isLoading: true};

    case AnalyticsTypes.STORE_RES:
      return {
        ...state,
        isLoading: false,
        adminStore: action.store,
        yearlyData: action.yearlyData,
        hourlyData: action.hourlyData,
      };

    default:
      return state;
  }
};
