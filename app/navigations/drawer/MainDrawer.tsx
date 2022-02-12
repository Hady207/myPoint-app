import React from 'react';
import {T, DrawerHeader} from '@atoms';
import AppStack from '../stacks/AppStack';
import ChangePasswordStack from '../stacks/ChangePasswordStack';

import NotificationScreen from '_containers/NotificationScreen';
import CustomDrawer from './CustomDrawer';
// import ProfileScreen from '_containers/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigatior = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{drawerLabelStyle: {textAlign: 'left'}}}>
      <Drawer.Screen
        name="Home"
        component={AppStack}
        options={{
          //   drawerLabel: ({focused, color}) => (
          //     <T title="home" color={color} textStyle={{textAlign: 'left'}} />
          //   ),
          headerShown: false,
        }}
      />
      {/* <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header: () => <DrawerHeader />,
          drawerLabel: ({ focused, color }) => (
            <T title="profile" color={color} />
          ),
        }}
      /> */}
      {/* <Drawer.Screen
        name="ChangePasswordStack"
        component={ChangePasswordStack}
        options={{
          headerShown: false,
          drawerLabel: ({focused, color}) => (
            <T
              title="change_password"
              color={color}
              textStyle={{textAlign: 'left'}}
            />
          ),
        }}
      /> */}
      {/* <Drawer.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          header: () => <DrawerHeader title="notification" />,
          drawerLabel: ({ focused, color }) => (
            <T
              title="notification"
              color={color}
              textStyle={{ textAlign: 'left' }}
            />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigatior;
