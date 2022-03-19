import {createSelector, createStructuredSelector} from 'reselect';
import {initialState} from './reducer';

const loginRootSelector = (state: any) => state.login ?? initialState;

export const selectLoginIsloading = () =>
  createSelector(loginRootSelector, substate => substate.loginIsLoading);

export const selectLoginErrorMessage = () =>
  createSelector(loginRootSelector, substate => substate.loginErrorMessage);

const loginSelectors = createStructuredSelector({
  loginIsLoading: selectLoginIsloading(),

  errorMessage: selectLoginErrorMessage(),
});

export default loginSelectors;
