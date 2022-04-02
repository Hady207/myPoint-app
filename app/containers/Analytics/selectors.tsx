import {createSelector, createStructuredSelector} from 'reselect';
import {initialState} from './reducer';

const rootScreenSelector = (state: any) => state.analytics ?? initialState;

export const selectIsloading = () =>
  createSelector(rootScreenSelector, substate => substate.isLoading);

const analyticsSelectors = createStructuredSelector({
  isLoading: selectIsloading(),
});

export default analyticsSelectors;
