import {Pressable, LayoutAnimation, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {User} from '../../../models/apiModels';
import ExtendedSection from './ExtendedSection';

interface UserRowProps {
  item: User;
  index: number;
}

const UserRow = ({item, index}: UserRowProps) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const handleOnPress = () => setDropDownOpen(prevState => !prevState);
  return (
    <View
      style={styles.mainContainer}
      onLayout={() => LayoutAnimation.spring()}>
      <View style={styles.rowContainer}>
        <Text style={styles.flex1}>{index + 1}</Text>
        <Text style={styles.flex1}>
          {item.name.first + ' ' + item.name.last}
        </Text>
        <View style={styles.flex1}>
          <Pressable onPress={handleOnPress} hitSlop={10}>
            <Text>Open</Text>
          </Pressable>
        </View>
      </View>
      {dropDownOpen ? (
        <ExtendedSection
          setDropDownOpen={setDropDownOpen}
          user={item}
          index={index}
        />
      ) : null}
    </View>
  );
};

export default UserRow;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    alignItems: 'center',
  },
  mainContainer: {
    marginVertical: 4,
    paddingVertical: 12,
    paddingHorizontal: 8,
    width: '100%',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
