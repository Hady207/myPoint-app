import React from 'react';
import {T, DrawerHeader} from '@atoms';
import {Header, Icon} from 'react-native-elements';
import {Colors, Scale} from '@styles';
import AppStack from '../stacks/AppStack';
import {LoginScreen, SignupScreen} from '@containers/Authentication';
import CustomDrawer from './CustomDrawer';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyBookingsScreen from '@containers/MyBookings';
import LoginStack from '../stacks/loginStack';

const Drawer = createDrawerNavigator();

const DrawerNavigatior = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerLabelStyle: {textAlign: 'left'},
      }}>
      <Drawer.Screen
        name="Home"
        component={AppStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="MyBookings"
        component={MyBookingsScreen}
        options={{
          // headerShown: false,
          title: 'My Bookings',
        }}
      />
      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{
          drawerItemStyle: {height: 0},
        }}
      />
      <Drawer.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          drawerItemStyle: {height: 0},
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatior;
