import {createActions} from 'reduxsauce';

export const {Types: LoginTypes, Creators: LoginActions} = createActions({
  requestLogin: ['username', 'password', 'params'],
  loginSuccess: null,
  loginFail: ['errorMessage'],
  clearErrorMessage: null,
});

export const initialState = {
  loginIsLoading: false,
  loginErrorMessage: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LoginTypes.REQUEST_LOGIN:
      return {...state, loginIsLoading: true};

    case LoginTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loginIsLoading: false,
        loginErrorMessage: null,
      };

    case LoginTypes.CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        loginIsLoading: false,
        loginErrorMessage: null,
      };

    case LoginTypes.LOGIN_FAIL:
      return {
        ...state,
        loginIsLoading: false,
        loginErrorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
