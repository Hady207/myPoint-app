import {combineReducers} from 'redux';
// main app reducer
import {rootScreenReducer as root} from '@containers/Root/reducer';
import {homeReducer as home} from '@containers/Home/reducer';
import {loginReducer as login} from '@containers/Authentication/Login/reducer';
import {signupReducer as signup} from '@containers/Authentication/Signup/reducer';

const rootReducer = combineReducers({
  root,
  home,
  login,
  signup,
});

export default rootReducer;
