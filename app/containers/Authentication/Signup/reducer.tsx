import {createActions} from 'reduxsauce';

export const {Types: SignupTypes, Creators: SignupActions} = createActions({
  requestSignup: ['username', 'password'],
  signupRequestSuccess: null,
  signupRequestFail: ['errorMessage'],
  clearErrorMessage: null,
});

export const initalState = {
  signupIsLoading: false,
  signupErrorMessage: null,
};

export const signupReducer = (state = initalState, action) => {
  switch (action.type) {
    case SignupTypes.REQUEST_SIGNUP:
      return {
        ...state,
        signupIsLoading: true,
        signupErrorMessage: null,
      };
    case SignupTypes.SIGNUP_REQUEST_SUCCESS:
      return {
        ...state,
        signupIsLoading: false,
        signupErrorMessage: null,
      };

    case SignupTypes.SIGNUP_REQUEST_FAIL:
      return {
        ...state,
        signupIsLoading: false,
        signupErrorMessage: action.errorMessage,
      };

    case SignupTypes.CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        signupErrorMessage: null,
      };

    default:
      return state;
  }
};
