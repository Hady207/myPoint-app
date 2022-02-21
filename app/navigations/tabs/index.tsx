import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Icon} from 'react-native-elements';
import DataChartsScreen from '@containers/DataCharts';
import QRScannerScreen from '@containers/QRScanner';
import BookCalendar from '@containers/BookCalendar';
import {Colors} from '@styles';

const Tab = createBottomTabNavigator();

const AdminTabs = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{tabBarHideOnKeyboard: true, headerShown: false}}>
      <Tab.Screen
        name="AdminHome"
        component={DataChartsScreen}
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
          tabBarLabel: 'Barcode Scanner',
          tabBarIcon: props => (
            <Icon name="barcode" type="ant-design" {...props} />
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
