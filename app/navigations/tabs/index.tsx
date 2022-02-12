import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DataChartsScreen from '@containers/DataCharts';
import QRScannerScreen from '@containers/QRScanner';

const Tab = createBottomTabNavigator();

const AdminTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AdminHome" component={DataChartsScreen} />
      <Tab.Screen name="AdminBarcode" component={QRScannerScreen} />
    </Tab.Navigator>
  );
};

export default AdminTabs;
