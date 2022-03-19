import {createSelector, createStructuredSelector} from 'reselect';
import {initalState} from './reducer';

const homeRootSelector = state => state.home ?? initalState;

export const selectIsloading = () =>
  createSelector(homeRootSelector, substate => substate.isLoading);

export const selectErrorMessage = () =>
  createSelector(homeRootSelector, substate => substate.errorMessage);

export const selectHomeRefresh = () =>
  createSelector(homeRootSelector, substate => substate.errorMessage);

export const selectStores = () =>
  createSelector(homeRootSelector, substate => substate.stores);

const homeSelectors = createStructuredSelector({
  isLoading: selectIsloading(),
  errorMessage: selectErrorMessage(),
  homeRefresh: selectHomeRefresh(),
  stores: selectStores(),
});

export default homeSelectors;
