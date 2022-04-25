import {createSelector, createStructuredSelector} from 'reselect';
import {initialState} from './reducer';

const categoryRootSelector = (state: any) => state.category ?? initialState;

export const selectIsloading = () =>
  createSelector(categoryRootSelector, substate => substate.isLoading);

export const selectErrorMessage = () =>
  createSelector(categoryRootSelector, substate => substate.errorMessage);

export const selectStores = () =>
  createSelector(categoryRootSelector, substate => substate.stores);

const homeSelectors = createStructuredSelector({
  isLoading: selectIsloading(),
  errorMessage: selectErrorMessage(),
  stores: selectStores(),
});

export default homeSelectors;
