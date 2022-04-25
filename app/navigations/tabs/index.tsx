import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import AnalyticsScreen from '@containers/Analytics';
import QRScannerScreen from '@containers/QRScanner';
import BookCalendar from '@containers/BookCalendar';

const Tab = createBottomTabNavigator();

const AdminTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{tabBarHideOnKeyboard: true, headerShown: false}}>
      <Tab.Screen
        name="AdminHome"
        component={AnalyticsScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: props => (
            <Icon name="home" type="ant-design" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="AdminBarcode"
        component={QRScannerScreen}
        options={{
          tabBarLabel: 'QR Scanner',
          tabBarIcon: props => (
            <Icon name="ios-qr-code-outline" type="ionicon" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="AdminCalendar"
        component={BookCalendar}
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: props => (
            <Icon name="calendar" type="font-awesome" {...props} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AdminTabs;
