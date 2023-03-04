import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../constants/colors';
import {useAppSelector} from '../../../store/store';

const DetailsSection = () => {
  const currentUser = useAppSelector(state => state?.profile?.currentUser);

  const renderTextSection = ({
    value,
    name,
    icon,
  }: {
    value: string;
    name: string;
    icon?: ImageSourcePropType;
  }) => (
    <View style={styles.section}>
      <Text>{name}</Text>
      <View style={styles.value}>
        {icon ? <Image source={icon} style={styles.icon} /> : null}
        <Text>{value}</Text>
      </View>
    </View>
  );

  const renderGenderSection = () => (
    <View style={styles.section}>
      <Text>Gender</Text>
      <View style={styles.genderBoxesContainer}>
        {renderGenderBox(EGender.male)}
        {renderGenderBox(EGender.female)}
      </View>
    </View>
  );

  enum EGender {
    male = 'male',
    female = 'female',
  }

  const genderDictionary: {
    [key in EGender]: {
      text: string;
      backgroundColor: string;
      icon: ImageSourcePropType;
    };
  } = {
    [EGender.female]: {
      backgroundColor: colors.pink,
      text: 'Female',
      icon: require('../../../assets/images/female.png'),
    },
    [EGender.male]: {
      backgroundColor: colors.blue,
      text: 'Male',
      icon: require('../../../assets/images/male.png'),
    },
  };

  const renderGenderBox = (gender: EGender) => {
    const data = genderDictionary[gender];
    return (
      <View
        style={StyleSheet.flatten([
          styles.genderBox,
          {
            backgroundColor: data.backgroundColor,
            opacity: gender === currentUser?.gender ? 1 : 0.33,
          },
        ])}>
        <Image style={styles.icon} source={data.icon} />
        <Text style={styles.whiteText}>{data.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>My Profile</Text>

      <Image source={{uri: currentUser?.picture.large}} style={styles.image} />
      {renderTextSection({
        name: 'First Name',
        value: currentUser?.name?.first ?? '',
      })}
      {renderTextSection({
        name: 'Last Name',
        value: currentUser?.name?.last ?? '',
      })}
      {renderTextSection({
        name: 'Email',
        value: currentUser?.email ?? '',
        icon: require('../../../assets/images/mail.png'),
      })}
      {renderTextSection({
        name: 'Phone',
        value: currentUser?.phone ?? '',
        icon: require('../../../assets/images/ad_units.png'),
      })}
      {renderGenderSection()}
    </View>
  );
};

export default DetailsSection;

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 28,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 30,
    color: colors.brown,
  },
  value: {
    backgroundColor: colors.cream,
    borderColor: colors.borders,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginTop: 8,
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    paddingVertical: 15,
  },
  image: {width: 100, height: 100, borderRadius: 100, marginVertical: 13},
  icon: {
    marginEnd: 10,
  },
  genderBox: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    borderColor: colors.black,
    borderWidth: 1,
    marginVertical: 10,
    marginEnd: 10,
    flexDirection: 'row',
  },
  whiteText: {
    color: colors.white,
  },
  genderBoxesContainer: {
    flexDirection: 'row',
  },
});
