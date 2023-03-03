import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Name, User} from '../../../models/apiModels';
interface ExtendedSectionProps {
  user: User;
  index: number;
}

const ExtendedSection = ({user, index}: ExtendedSectionProps) => {
  const [EditableUser, setEditableUser] = useState(user);

  const handleUserFieldChange = (changed: Partial<User>) =>
    setEditableUser(prevState => {
      console.log(changed);
      return {...prevState, ...changed};
    });
  const handleUserNameFieldChange = (changed: Partial<Name>) =>
    setEditableUser(prevState => {
      return {...prevState, name: {...prevState.name, ...changed}};
    });

  return (
    <View>
      <TextInput
        style={styles.textField}
        onChangeText={text => handleUserNameFieldChange({first: text})}
        value={EditableUser.name.first}
      />
      <TextInput
        style={styles.textField}
        onChangeText={text => handleUserNameFieldChange({last: text})}
        value={EditableUser.name.last}
      />
      <TextInput
        style={styles.textField}
        onChangeText={text => handleUserFieldChange({phone: text})}
        value={user.phone}
      />
      <TextInput
        style={styles.textField}
        onChangeText={text => handleUserFieldChange({email: text})}
        value={user.email}
      />
    </View>
  );
};

export default ExtendedSection;

const styles = StyleSheet.create({
  textField: {flex: 1, paddingVertical: 4, paddingHorizontal: 4},
});
