import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PropTypes from 'prop-types';

import HomeStack from './HomeStack';

const Stack = createNativeStackNavigator();
// const Stack = createSharedElementStackNavigator();

// add screen or navigators that shouldn't have bottom bar here
const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={HomeStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

AppStack.propTypes = {
  navigation: PropTypes.object,
};

export default AppStack;
