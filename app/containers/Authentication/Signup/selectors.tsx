import {createSelector, createStructuredSelector} from 'reselect';
import {initalState} from './reducer';

const signUpRootSelector = (state: any) => state.signup ?? initalState;

export const selectSignUpIsloading = () =>
  createSelector(signUpRootSelector, substate => substate.signupIsLoading);

export const selectErrorMessage = () =>
  createSelector(signUpRootSelector, substate => substate.signupErrorMessage);

const signupSelectors = createStructuredSelector({
  signupIsLoading: selectSignUpIsloading(),
  errorMessage: selectErrorMessage(),
});

export default signupSelectors;
