import {createActions} from 'reduxsauce';

export const {Types: AnalyticsTypes, Creators: AnalyticsActions} =
  createActions({
    getStore: null,
    storeRes: ['store'],
    analyticsReq: null,
    analyticsRes: ['yearlyData', 'hourlyData', 'ratioData'],
    analyticsSuc: null,
    analyticsFail: ['errorMessage'],
  });

export const initialState = {
  isLoading: false,
  adminStore: null,
  errorMessage: null,
  dataListLoading: false,
  yearlyData: null,
  hourlyData: null,
  ratioData: null,
  failErrorMessage: null,
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
      };

    case AnalyticsTypes.ANALYTICS_REQ:
      return {
        ...state,
        dataListLoading: true,
      };

    case AnalyticsTypes.ANALYTICS_RES:
      return {
        ...state,

        yearlyData: action.yearlyData,
        hourlyData: action.hourlyData,
        ratioData: action.ratioData,
      };
    case AnalyticsTypes.ANALYTICS_SUC:
      return {
        ...state,
        dataListLoading: false,
      };

    case AnalyticsTypes.ANALYTICS_FAIL:
      return {
        ...state,
        dataListLoading: false,
        failErrorMessage: action.errorMessage,
      };

    default:
      return state;
  }
};
