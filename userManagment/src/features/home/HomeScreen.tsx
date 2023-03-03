import {FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {getHomeUsers} from './state/homeActions';
import UserRow from './components/UserRow';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(state => state.home.users);

  useEffect(() => {
    dispatch(getHomeUsers());
  }, [dispatch]);

  return (
    <View>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={users}
        renderItem={UserRow}
      />
    </View>
  );
};

export default HomeScreen;
