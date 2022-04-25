import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '@containers/Home';
import StoreScreen from '@containers/StoreDetails';
import CategoryScreen from '@containers/CategoryView';
import BookingScreen from '@containers/Booking';
import QRCodeScreen from '@containers/QRCode';
import {Pressable} from 'react-native';
import {CustomNavButton, Header} from '@components/atoms';

const Stack = createNativeStackNavigator();
// const Stack = createSharedElementStackNavigator();

// add screen or navigators that shouldn't have bottom bar here
const UserHomeStack = ({navigation}) => {
  const headerOptions = {
    headerTitle: '',
    headerStyle: {elevation: 0, shadowOpacity: 0},
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{header: () => <Header title="myPoint" homeScreen />}}
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
        name="CategoryViewScreen"
        component={CategoryScreen}
        options={headerOptions}
      />
      <Stack.Screen
        name="QRcodeScreen"
        component={QRCodeScreen}
        options={{
          ...headerOptions,
          title: 'QR Info',
          headerLeft: props => <Pressable disabled />,
          headerRight: props => (
            <CustomNavButton icon="md-close" size={30} {...props} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default UserHomeStack;
