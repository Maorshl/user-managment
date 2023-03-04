import {Text, StyleSheet, TextStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';

interface RegularTextProps extends PropsWithChildren {
  style?: TextStyle;
}

const RegularText = ({children, style}: RegularTextProps) => {
  return (
    <Text style={StyleSheet.flatten([styles.regularText, style])}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  regularText: {
    fontFamily: 'Montserrat-Regular',
  },
});

export default RegularText;
