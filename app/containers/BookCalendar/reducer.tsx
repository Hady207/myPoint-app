import {createActions} from 'reduxsauce';

export const {Types: CalendarTypes, Creators: CalendarActions} = createActions({
  calendarRequest: null,
  calendarResponse: ['data'],
  calendarFail: ['errorMessage'],
});

export const initalState = {
  isLoading: false,
  errorMessage: null,
};

export const bookingCalendarReducer = (state = initalState, action) => {
  switch (action.type) {
    case CalendarTypes.CALENDAR_REQUEST:
      return {...state, isLoading: true};

    case CalendarTypes.CALENDAR_RESPONSE:
      return {...state, isLoading: false};
    case CalendarTypes.CALENDAR_FAIL:
      return {...state, isLoading: false, errorMessage: action.errorMessage};

    default:
      return state;
  }
};
