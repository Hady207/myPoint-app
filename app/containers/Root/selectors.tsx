import {createSelector, createStructuredSelector} from 'reselect';
import {initialState} from './reducer';

const rootScreenSelector = state => state.root ?? initialState;

export const selectAccessToken = () =>
  createSelector(rootScreenSelector, substate => substate.accessToken);

export const selectIsloading = () =>
  createSelector(rootScreenSelector, substate => substate.isLoading);

export const selectUserProfile = () =>
  createSelector(rootScreenSelector, substate => substate.userProfile);

export const selectErrorMessage = () =>
  createSelector(rootScreenSelector, substate => substate.error);

const rootSelectors = createStructuredSelector({
  accessToken: selectAccessToken(),
  isLoading: selectIsloading(),
  userProfile: selectUserProfile(),
  errorMessage: selectErrorMessage(),
});

export default rootSelectors;
