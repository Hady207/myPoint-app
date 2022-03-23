import {createActions} from 'reduxsauce';

export const {Types: MyBookingsTypes, Creators: MyBookingsActions} =
  createActions({
    myBookReq: null,
    myBookResSuccess: ['data'],
    myBookResFail: ['errorMessage'],
  });

export const initalState = {
  isLoading: false,
  bookingsData: [],
  errorMessage: null,
};

export const myBookingsReducer = (state = initalState, action) => {
  switch (action.type) {
    case MyBookingsTypes.MY_BOOK_REQ:
      return {...state, isLoading: true};

    case MyBookingsTypes.MY_BOOK_RES_SUCCESS:
      return {...state, isLoading: false, bookingsData: action.data};
    case MyBookingsTypes.MY_BOOK_RES_FAIL:
      return {...state, isLoading: false, errorMessage: action.errorMessage};

    default:
      return state;
  }
};
