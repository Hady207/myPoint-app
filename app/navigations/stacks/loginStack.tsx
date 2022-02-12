import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PropTypes from 'prop-types';
import {Header} from '@atoms';
import {LoginScreen, SignupScreen} from '@containers/Authentication';

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
        name="Login"
        component={LoginScreen}
        options={{header: () => <Header title="myPoint" />}}
      />
    </Stack.Navigator>
  );
};

AppStack.propTypes = {
  navigation: PropTypes.object,
};

export default AppStack;
