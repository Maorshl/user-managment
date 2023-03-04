import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Name, User} from '../../../models/apiModels';
import {colors} from '../../../constants/colors';
import {useAppDispatch} from '../../../store/store';
import {setEditedUser} from '../state/homeSlice';
import RegularText from '../../../components/text/RegularText';
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

  const renderBottom = () => (
    <View style={styles.bottom}>
      <View style={styles.width}>
        <TextInput
          style={styles.textField}
          onChangeText={text => handleUserFieldChange({phone: text})}
          value={editableUser.phone}
        />
        <TextInput
          style={styles.textField}
          onChangeText={text => handleUserFieldChange({email: text})}
          value={editableUser.email}
        />
      </View>
      <Pressable
        onPress={handleSaveEditedUser}
        style={isPressed => {
          return isPressed.pressed
            ? {...styles.saveButton, opacity: 0.4}
            : styles.saveButton;
        }}>
        <RegularText style={styles.saveText}>Save</RegularText>
      </Pressable>
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
    </View>
  );

  return (
    <View style={styles.container}>
      {renderTop()}
      {renderBottom()}
    </View>
  );
};

export default ExtendedSection;

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
    width: '75%',
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
    width: '77%',
  },
  saveButton: {
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  saveText: {
    color: colors.white,
  },
});
