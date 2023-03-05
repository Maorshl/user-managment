import {
  Image,
  ImageSourcePropType,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../../constants/colors';
import {useAppSelector} from '../../../store/store';
import RegularText from '../../../components/text/RegularText';
import MediumText from '../../../components/text/MediumText';
import SemiBoldText from '../../../components/text/SemiBoldText';
import {genderDictionary} from '../../../constants/gender';
import {EGender} from '../../../models/enums';
import ProfileMap from './ProfileMap';

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
      <SemiBoldText>{name}</SemiBoldText>
      <View style={styles.value}>
        {icon ? <Image source={icon} style={styles.icon} /> : null}
        <RegularText>{value}</RegularText>
      </View>
    </View>
  );

  const renderGenderSection = () => (
    <View style={styles.section}>
      <SemiBoldText>Gender</SemiBoldText>
      <View style={styles.genderBoxesContainer}>
        {renderGenderBox(EGender.male)}
        {renderGenderBox(EGender.female)}
      </View>
    </View>
  );

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
        <MediumText style={styles.whiteText}>{data.text}</MediumText>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <SemiBoldText style={styles.title}>My Profile</SemiBoldText>

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
      {Platform.OS === 'ios' ? <ProfileMap /> : null}
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
