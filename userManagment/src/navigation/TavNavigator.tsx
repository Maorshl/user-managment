import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabsParamList} from '../constants/screens';
import HomeScreen from '../features/home/HomeScreen';
import ProfileScreen from '../features/profile/ProfileScreen';

export default function TavNavigator() {
  const Tab = createBottomTabNavigator<TabsParamList>();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
