import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {storageRead} from '@utils/storageUtils';
import RootNavigator from '@navigations/index';
import {RootScreenActions} from './reducer';

const RootScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      try {
        // After restoring token, we may need to validate it in production apps
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        const accessToken = await storageRead('accessToken');
        const userId = await storageRead('userId');

        if (accessToken && userId) {
          dispatch(RootScreenActions.restoreUser(accessToken, userId));
        }
      } catch (e) {
        // Restoring token failed
        console.log(e);
      }
    };
    bootstrapAsync();
  }, [dispatch]);

  return <RootNavigator />;
};

export default RootScreen;
