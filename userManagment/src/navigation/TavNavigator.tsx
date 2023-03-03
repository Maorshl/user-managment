import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabsParamList} from '../contants/screens';
import HomeScreen from '../features/home/HomeScreen';

export default function TavNavigator() {
  const Tab = createBottomTabNavigator<TabsParamList>();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
