import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DataChartsScreen from '@containers/DataCharts';
import QRScannerScreen from '@containers/QRScanner';
import BookCalendar from '@containers/BookCalendar';

const Tab = createBottomTabNavigator();

const AdminTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{tabBarHideOnKeyboard: true, headerShown: false}}>
      <Tab.Screen name="AdminHome" component={DataChartsScreen} />
      <Tab.Screen name="AdminBarcode" component={QRScannerScreen} />
      <Tab.Screen name="AdminCalendar" component={BookCalendar} />
    </Tab.Navigator>
  );
};

export default AdminTabs;
