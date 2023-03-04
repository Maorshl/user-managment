import {Text, StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';

interface RegularTextProps extends PropsWithChildren {}

const RegularText = ({children}: RegularTextProps) => {
  return <Text style={styles.regularText}>{children}</Text>;
};

const styles = StyleSheet.create({
  regularText: {
    fontFamily: 'Montserrat-Regular',
  },
});

export default RegularText;
