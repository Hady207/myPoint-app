import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {ThemeProvider} from 'react-native-elements';
import {store, persistor} from '@redux/configStore';
import notifee, {AndroidImportance} from '@notifee/react-native';
import Root from '@containers/Root';

const handleSplash = async () => {
  await RNBootSplash.hide({fade: true});
};

const displatNotification = async remoteMessage => {
  // Create a channel
  const channelId = await notifee.createChannel({
    id: 'default1',
    name: 'Default Channel',
    importance: AndroidImportance.HIGH,
  });

  // Display a notification
  await notifee.displayNotification({
    id: remoteMessage?.messageId,
    body: remoteMessage?.notification.body,
    title: remoteMessage?.notification.title,
    data: remoteMessage?.data,
    android: {
      channelId,
      importance: AndroidImportance.HIGH,
    },
  });
};

const App = () => {
  useEffect(() => {
    const timer1 = setTimeout(() => handleSplash(), 500);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  useEffect(() => {
    const firebaseMessaging = messaging().onMessage(async remoteMessage => {
      try {
        displatNotification(remoteMessage);
      } catch (error) {
        console.log(error);
      }
    });

    return firebaseMessaging;
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          barStyle={'dark-content'}
        />
        <ThemeProvider>
          <Root />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
