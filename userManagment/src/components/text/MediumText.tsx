import {Text, StyleSheet, TextStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';

interface MediumTextProps extends PropsWithChildren {
  style?: TextStyle;
}

const MediumText = ({children, style}: MediumTextProps) => {
  return (
    <Text style={StyleSheet.flatten([styles.mediumText, style])}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  mediumText: {
    fontFamily: 'Montserrat-Medium',
  },
});

export default MediumText;
