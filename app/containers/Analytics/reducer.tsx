import {createActions} from 'reduxsauce';

export const {Types: AnalyticsTypes, Creators: AnalyticsActions} =
  createActions({
    startUp: null,
  });

export const initialState = {
  isLoading: false,
  errorMessage: null,
};

export const analyticsScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case AnalyticsTypes.START_UP:
      return {...state, isLoading: true};

    default:
      return state;
  }
};
