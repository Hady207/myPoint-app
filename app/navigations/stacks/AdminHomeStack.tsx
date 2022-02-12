import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Header} from '@atoms';
import AdminTabs from '../tabs';

const Stack = createNativeStackNavigator();
// const Stack = createSharedElementStackNavigator();

// add screen or navigators that shouldn't have bottom bar here
const UserHomeStack = () => {
  const headerOptions = {
    headerTitle: '',
    headerStyle: {elevation: 0, shadowOpacity: 0},
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AdminHomeScreen"
        component={AdminTabs}
        options={{header: () => <Header title="myPoint" />}}
      />
    </Stack.Navigator>
  );
};

export default UserHomeStack;
