import {Text, StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';

interface BoldTextProps extends PropsWithChildren {}

const BoldText = ({children}: BoldTextProps) => {
  return <Text style={styles.boldText}>{children}</Text>;
};

const styles = StyleSheet.create({
  boldText: {
    fontFamily: 'Montserrat-Bold',
  },
});

export default BoldText;
