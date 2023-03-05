import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {getHomeUsers} from './state/homeActions';
import UserRow from './components/UserRow';
import {SafeAreaView} from 'react-native-safe-area-context';
import NumberOfRows from './components/NumberOfRows';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(state => state.home.users);
  const isLoading = useAppSelector(state => state.home.isLoading);
  const numberOfRows = useAppSelector(state => state.home.numberOfRows);

  useEffect(() => {
    dispatch(getHomeUsers());
  }, [dispatch, numberOfRows]);

  return (
    <SafeAreaView edges={['top', 'right', 'left']}>
      <View>
        <NumberOfRows />
        {isLoading ? (
          <ActivityIndicator size="large" style={styles.loader} />
        ) : (
          <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={users}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={styles.footer}
            renderItem={props => <UserRow {...props} />}
            contentContainerStyle={styles.contentContainer}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 12,
  },
  footer: {
    height: 100,
    width: '100%',
  },
  loader: {paddingVertical: '50%'},
});
export default HomeScreen;
