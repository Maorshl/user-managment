import {View, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../constants/colors';

const ProfileScreen = () => {
  const renderUpperSection = () => <View style={styles.upperSection} />;
  return (
    <SafeAreaView edges={['bottom', 'left', 'right']}>
      <View style={styles.flex1}>{renderUpperSection()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  upperSection: {
    backgroundColor: colors.cream,
    width: '100%',
    height: 300,
  },
});

export default ProfileScreen;
