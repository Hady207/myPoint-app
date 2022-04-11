import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import {storageRead} from '@utils/storageUtils';
import RootNavigator from '@navigations/index';
import {RootScreenActions} from './reducer';
import rootSelectors from './selectors';

const RootScreen = () => {
  const dispatch = useDispatch();
  const {userProfile} = useSelector(rootSelectors);

  useEffect(() => {
    const requestUserPermission = async () => {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        const userId = await storageRead('userId');
        const fcmToken = await messaging().getToken();
        console.log('_____fcmToken____', fcmToken);
        dispatch(RootScreenActions.saveFCM(userId, fcmToken));
      }
    };

    requestUserPermission();
  }, [dispatch, userProfile?.id]);

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
