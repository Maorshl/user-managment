import {StyleSheet, View} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
import {colors} from '../../../constants/colors';
import SemiBoldText from '../../../components/text/SemiBoldText';

const ProfileMap = () => {
  return (
    <View>
      <SemiBoldText>Location</SemiBoldText>
      <View style={styles.container}>
        <MapView style={styles.map} />
      </View>
    </View>
  );
};

export default ProfileMap;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.cream,
    borderColor: colors.borders,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    marginTop: 10,
  },
  map: {width: 300, height: 300},
});
