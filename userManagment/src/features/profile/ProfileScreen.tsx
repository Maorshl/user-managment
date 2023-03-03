import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../constants/colors';
import DetailsSection from './components/DetailsSection';

const ProfileScreen = () => {
  const renderUpperSection = () => <View style={styles.upperSection} />;
  return (
    <View style={styles.flex1}>
      <ScrollView>
        {renderUpperSection()}
        <DetailsSection />
      </ScrollView>
    </View>
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
