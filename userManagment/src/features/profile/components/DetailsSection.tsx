import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../constants/colors';
import {useAppSelector} from '../../../store/store';

const DetailsSection = () => {
  const currentUser = useAppSelector(state => state?.profile?.currentUser);

  const renderTextSection = ({
    value,
    name,
  }: {
    value: string;
    name: string;
    icon?: JSX.Element;
  }) => (
    <View style={styles.section}>
      <Text>{name}</Text>
      <View style={styles.value}>
        <Text>{value}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>My Profile</Text>

      <Image source={{uri: currentUser?.picture.large}} style={styles.image} />
      {renderTextSection({
        name: 'First Name',
        value: currentUser?.name?.first ?? '',
      })}
      {renderTextSection({
        name: 'Last Name',
        value: currentUser?.name?.last ?? '',
      })}
      {renderTextSection({name: 'Email', value: currentUser?.email ?? ''})}
      {renderTextSection({name: 'Phone', value: currentUser?.phone ?? ''})}
    </View>
  );
};

export default DetailsSection;

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 28,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 30,
    color: colors.brown,
  },
  value: {
    backgroundColor: colors.cream,
    borderColor: colors.borders,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginTop: 8,
    borderWidth: StyleSheet.hairlineWidth,
  },
  section: {
    paddingVertical: 15,
  },
  image: {width: 100, height: 100, borderRadius: 100, marginVertical: 13},
});
