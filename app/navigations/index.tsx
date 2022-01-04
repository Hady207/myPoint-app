import React, {useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import AppStack from './stacks/AppStack';

const Stack = createNativeStackNavigator();

// the root navigator will be here
const RootNavigator = () => {
  const routeNameRef = useRef();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AppStack"
          component={AppStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
