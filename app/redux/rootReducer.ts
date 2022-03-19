import {combineReducers} from 'redux';
// main app reducer
import {rootScreenReducer as root} from '@containers/Root/reducer';
import {homeReducer as home} from '@containers/Home/reducer';

const rootReducer = combineReducers({
  root,
  home,
});

export default rootReducer;
