import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import MainDrawerNavigator from '@navigations/drawer/MainDrawer';
import {navigationRef, isReadyRef} from '@utils/navigationUtils';

const Stack = createNativeStackNavigator();

// the root navigator will be here
const RootNavigator = () => {
  const routeNameRef = useRef();

  const handleOnReady = () => {
    isReadyRef.current = true;
    routeNameRef.current = navigationRef.current.getCurrentRoute().name;
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef} onReady={handleOnReady}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="AppDrawer" component={MainDrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigator;
