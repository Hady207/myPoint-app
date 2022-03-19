import {createActions} from 'reduxsauce';

export const {Types: HomeTypes, Creators: HomeActions} = createActions({
  homeRefresh: null,
  homeRefreshFinished: null,

  getHomeData: null,
  getHomeDataSuccess: ['data'],
  getHomeDataFailed: ['errorMessage'],
});

export const initalState = {
  isLoading: false,
  errorMessage: null,
  homeRefresh: false,
  stores: [],
};

export const homeReducer = (state = initalState, action) => {
  switch (action.type) {
    case HomeTypes.GET_HOME_DATA:
      return {...state, isLoading: true};

    case HomeTypes.HOME_REFRESH:
      return {...state, homeRefresh: true};
    case HomeTypes.HOME_REFRESH_FINISHED:
      return {...state, homeRefresh: false};

    case HomeTypes.GET_HOME_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        stores: action.data,
      };

    case HomeTypes.GET_HOME_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
