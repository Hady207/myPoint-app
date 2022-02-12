import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PropTypes from 'prop-types';
import {Header} from '@atoms';
import HomeStack from './HomeStack';
import HomeScreen from '@containers/Home';
import StoreScreen from '@containers/StoreDetails';
import CalendarScreen from '@containers/BookCalendar';

const Stack = createNativeStackNavigator();
// const Stack = createSharedElementStackNavigator();

// add screen or navigators that shouldn't have bottom bar here
const AppStack = () => {
  const headerOptions = {
    headerTitle: '',
    // headerShown: false,
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
        name="CalendarScreen"
        component={CalendarScreen}
        options={headerOptions}
      />
    </Stack.Navigator>
  );
};

AppStack.propTypes = {
  navigation: PropTypes.object,
};

export default AppStack;
