import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {User} from '../../../models/apiModels';

interface UserRowProps {
  item: User;
  index: number;
}

const UserRow = ({item}: UserRowProps) => {
  return (
    <View style={styles.rowContainer}>
      <Text>{item.name.first + ' ' + item.name.last}</Text>
    </View>
  );
};

export default UserRow;

const styles = StyleSheet.create({
  rowContainer: {
    marginVertical: 4,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
});
