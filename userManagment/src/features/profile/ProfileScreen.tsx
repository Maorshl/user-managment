import {View, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../constants/colors';
import DetailsSection from './components/DetailsSection';

const ProfileScreen = () => {
  const renderUpperSection = () => (
    <View style={styles.upperSection}>
      <Image
        style={styles.profileImage}
        source={require('../../assets/images/illu.png')}
      />
    </View>
  );
  return (
    <SafeAreaView style={styles.flex1} edges={['left', 'right']}>
      <ScrollView>
        {renderUpperSection()}
        <DetailsSection />
      </ScrollView>
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
    height: 375,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {width: 237, height: 239},
});

export default ProfileScreen;
