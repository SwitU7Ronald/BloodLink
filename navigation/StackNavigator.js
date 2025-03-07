import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ViewDonorScreen from '../screens/ViewDonorScreen';
import UserProfileScreen from '../screens/UserProfileScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ViewDonor" component={ViewDonorScreen} />
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
