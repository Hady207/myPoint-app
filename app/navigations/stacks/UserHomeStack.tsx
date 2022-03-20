import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Header} from '@atoms';
import HomeScreen from '@containers/Home';
import StoreScreen from '@containers/StoreDetails';
import BookingScreen from '@containers/Booking';
import QRCodeScreen from '@containers/QRCode';

const Stack = createNativeStackNavigator();
// const Stack = createSharedElementStackNavigator();

// add screen or navigators that shouldn't have bottom bar here
const UserHomeStack = () => {
  const headerOptions = {
    headerTitle: '',
    headerStyle: {elevation: 0, shadowOpacity: 0},
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{header: () => <Header title="myPoint" />}}
      />
      <Stack.Screen
        name="StoreScreen"
        component={StoreScreen}
        options={headerOptions}
      />
      <Stack.Screen
        name="BookingScreen"
        component={BookingScreen}
        options={headerOptions}
      />
      <Stack.Screen
        name="QRcodeScreen"
        component={QRCodeScreen}
        options={headerOptions}
      />
    </Stack.Navigator>
  );
};

export default UserHomeStack;
