import React from 'react';
import {useSelector} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {LoginScreen, SignupScreen} from '@containers/Authentication';
import MyBookingsScreen from '@containers/MyBookings';
import rootSelectors from '@containers/Root/selectors';
import CustomDrawer from './CustomDrawer';
import AppStack from '../stacks/AppStack';

const Drawer = createDrawerNavigator();

const DrawerNavigatior = ({navigation}) => {
  const {userProfile} = useSelector(rootSelectors);
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
      {userProfile?.id && userProfile?.role === 'user' && (
        <Drawer.Screen
          name="MyBookings"
          component={MyBookingsScreen}
          options={{
            title: 'My Bookings',
          }}
        />
      )}
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
