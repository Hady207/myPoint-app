import {createActions} from 'reduxsauce';

export const {Types: BookTypes, Creators: BookActions} = createActions({
  bookReq: ['storeId', 'date', 'time'],
  bookResSuccess: ['data'],
  bookResFail: ['errorMessage'],
});

export const initalState = {
  isLoading: false,
  errorMessage: null,
};

export const bookingReducer = (state = initalState, action) => {
  switch (action.type) {
    case BookTypes.BOOK_REQ:
      return {...state, isLoading: true};

    case BookTypes.BOOK_RES_SUCCESS:
      return {...state, isLoading: false};
    case BookTypes.BOOK_RES_FAIL:
      return {...state, isLoading: false, errorMessage: action.errorMessage};

    default:
      return state;
  }
};
