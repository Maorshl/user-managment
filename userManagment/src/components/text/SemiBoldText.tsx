import {Text, StyleSheet, TextStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';

interface SemiBoldTextProps extends PropsWithChildren {
  style?: TextStyle;
}

const SemiBoldText = ({children, style}: SemiBoldTextProps) => {
  return (
    <Text style={StyleSheet.flatten([styles.semiBoldText, style])}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  semiBoldText: {
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default SemiBoldText;
