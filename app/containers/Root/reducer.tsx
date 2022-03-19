import {createActions} from 'reduxsauce';

export const {Types: RootScreenTypes, Creators: RootScreenActions} =
  createActions({
    startUp: null,
    signIn: ['user', 'token'],
    userProfile: ['user'],
    signOut: null,
  });

export const initialState = {
  isLoading: false,
  userProfile: null,
  token: null,
  errorMessage: null,
};

export const rootScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case RootScreenTypes.START_UP:
      return {...state, isLoading: true};
    case RootScreenTypes.SIGN_IN:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        userProfile: action.user,
        token: action.token,
      };

    case RootScreenTypes.SIGN_OUT:
      return initialState;

    default:
      return state;
  }
};
