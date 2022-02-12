import {combineReducers} from 'redux';
// main app reducer
import {rootScreenReducer as root} from '@containers/Root/reducer';

const rootReducer = combineReducers({
  root,
});

export default rootReducer;
