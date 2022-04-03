import {combineReducers} from 'redux';
// main app reducer
import {rootScreenReducer as root} from '@containers/Root/reducer';
import {homeReducer as home} from '@containers/Home/reducer';
import {loginReducer as login} from '@containers/Authentication/Login/reducer';
import {signupReducer as signup} from '@containers/Authentication/Signup/reducer';
import {bookingReducer as booking} from '@containers/Booking/reducer';
import {myBookingsReducer as myBookings} from '@containers/MyBookings/reducer';
import {qrScannerReducer as qrScanner} from '@containers/QRScanner/reducer';
import {analyticsScreenReducer as analytics} from '@containers/Analytics/reducer';
import {bookingCalendarReducer as calendar} from '@containers/BookCalendar/reducer';

const rootReducer = combineReducers({
  root,
  home,
  login,
  signup,
  booking,
  myBookings,
  qrScanner,
  analytics,
  calendar,
});

export default rootReducer;
