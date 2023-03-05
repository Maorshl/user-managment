import {ImageSourcePropType} from 'react-native/types';
import {EGender} from '../models/enums';
import {colors} from './colors';

export const genderDictionary: {
  [key in EGender]: {
    text: string;
    backgroundColor: string;
    icon: ImageSourcePropType;
  };
} = {
  [EGender.female]: {
    backgroundColor: colors.pink,
    text: 'Female',
    icon: require('../assets/images/female.png'),
  },
  [EGender.male]: {
    backgroundColor: colors.blue,
    text: 'Male',
    icon: require('../assets/images/male.png'),
  },
};
