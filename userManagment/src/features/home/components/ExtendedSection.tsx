import {Image, Pressable, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Name, User} from '../../../models/apiModels';
import {colors} from '../../../constants/colors';
import {useAppDispatch} from '../../../store/store';
import {deleteUser, setEditedUser} from '../state/homeSlice';
import RegularText from '../../../components/text/RegularText';
import MediumText from '../../../components/text/MediumText';
import {genderDictionary} from '../../../constants/gender';
interface ExtendedSectionProps {
  user: User;
  index: number;
  setDropDownOpen: (isOpen: boolean) => void;
}

const ExtendedSection = ({
  user,
  index,
  setDropDownOpen,
}: ExtendedSectionProps) => {
  const dispatch = useAppDispatch();
  const [editableUser, setEditableUser] = useState(user);

  const handleUserFieldChange = (changed: Partial<User>) =>
    setEditableUser(prevState => {
      return {...prevState, ...changed};
    });
  const handleUserNameFieldChange = (changed: Partial<Name>) =>
    setEditableUser(prevState => {
      return {...prevState, name: {...prevState.name, ...changed}};
    });

  const handleSaveEditedUser = () => {
    dispatch(setEditedUser({user: editableUser, index}));
    setDropDownOpen(false);
  };
  const handleDeleteUser = () => {
    dispatch(deleteUser(index));
    setDropDownOpen(false);
  };

  const renderBottom = () => (
    <View style={styles.bottom}>
      <View style={styles.width}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../../../assets/images/ad_units.png')} />
          <TextInput
            style={styles.textField}
            onChangeText={text => handleUserFieldChange({phone: text})}
            value={editableUser.phone}
          />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../../../assets/images/mail.png')} />
          <TextInput
            style={styles.textField}
            onChangeText={text => handleUserFieldChange({email: text})}
            value={editableUser.email}
          />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable
          onPress={handleSaveEditedUser}
          style={isPressed => {
            return isPressed.pressed
              ? {...styles.button, opacity: 0.4}
              : styles.button;
          }}>
          <RegularText style={styles.saveText}>Save</RegularText>
        </Pressable>
        <Pressable
          onPress={handleDeleteUser}
          style={isPressed => {
            return isPressed.pressed
              ? {...styles.button, opacity: 0.4}
              : {...styles.button, backgroundColor: colors.red};
          }}>
          <RegularText style={styles.saveText}>Delete</RegularText>
        </Pressable>
      </View>
    </View>
  );

  const renderTop = () => (
    <View style={styles.firstLastName}>
      <TextInput
        style={styles.textField}
        onChangeText={text => handleUserNameFieldChange({first: text})}
        value={editableUser.name.first}
      />
      <TextInput
        style={styles.textField}
        onChangeText={text => handleUserNameFieldChange({last: text})}
        value={editableUser.name.last}
      />
      <View
        style={StyleSheet.flatten([
          styles.gender,
          {backgroundColor: genderDictionary[user.gender].backgroundColor},
        ])}>
        <Image
          style={styles.genderIcon}
          source={genderDictionary[user.gender].icon}
        />
        <MediumText style={styles.whiteText}>
          {genderDictionary[user.gender].text}
        </MediumText>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderTop()}
      {renderBottom()}
    </View>
  );
};

export default React.memo(ExtendedSection);

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
  },
  textField: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderColor: 'grey',
    borderWidth: StyleSheet.hairlineWidth,
    alignSelf: 'flex-start',
    width: '85%',
    borderRadius: 4,
    marginVertical: 4,
    marginHorizontal: 4,
  },
  firstLastName: {flexDirection: 'row'},
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  width: {
    width: '60%',
  },
  button: {
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginHorizontal: 4,
  },
  saveText: {
    color: colors.white,
  },
  genderIcon: {
    marginEnd: 4,
  },
  gender: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    flexDirection: 'row',
  },
  buttonsContainer: {flexDirection: 'row'},
  whiteText: {
    color: colors.white,
  },
});
