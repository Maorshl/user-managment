import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {getHomeUsers} from './state/homeActions';
import UserRow from './components/UserRow';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(state => state.home.users);

  useEffect(() => {
    dispatch(getHomeUsers());
  }, [dispatch]);

  return (
    <SafeAreaView edges={['top', 'right', 'left']}>
      <View>
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={users}
          renderItem={props => <UserRow {...props} />}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 12,
  },
});
export default HomeScreen;
