import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './RootNavigator';
import { navigationRef } from './NavigationService';
export const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
};
