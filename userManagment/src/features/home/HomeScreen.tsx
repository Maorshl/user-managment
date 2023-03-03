import {Text, View} from 'react-native';
import React from 'react';
import {useAppSelector} from '../../store/store';

const HomeScreen = () => {
  const value = useAppSelector(state => state.home.value);
  return (
    <View>
      <Text>{value}</Text>
    </View>
  );
};

export default HomeScreen;
