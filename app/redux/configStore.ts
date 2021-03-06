import {applyMiddleware, compose, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['login', 'signup', 'booking', 'analytics'],
  stateReconciler: autoMergeLevel2,
};

const allReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    // selecting the reducers that you want to save from reseting
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  // console.log(allReducer)
  return rootReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, allReducer);

const middleware = [];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
enhancers.push(applyMiddleware(...middleware));

const store = createStore(persistedReducer, composeEnhancers(...enhancers));

const persistor = persistStore(store);
// Kick off the root saga
sagaMiddleware.run(rootSaga);

export {store, persistor};
