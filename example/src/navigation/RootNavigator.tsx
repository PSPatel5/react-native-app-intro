import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DemoScreen } from 'views/DemoScreen';
import { InitialScreen } from 'views/InitialScreen';
const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Initial" component={InitialScreen} />
      <Stack.Screen name="Demo" component={DemoScreen} />
    </Stack.Navigator>
  );
};
