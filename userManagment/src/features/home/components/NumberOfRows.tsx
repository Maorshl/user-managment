import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import RegularText from '../../../components/text/RegularText';
import {EResultsNumber} from '../../../models/apiModels';
import {useAppDispatch, useAppSelector} from '../../../store/store';
import {setNumberOfRows} from '../state/homeSlice';
import {colors} from '../../../constants/colors';

const NumberOfRows = () => {
  const dispatch = useAppDispatch();
  const currentNumberOfRows = useAppSelector(state => state.home.numberOfRows);
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => dispatch(setNumberOfRows(EResultsNumber.TEN))}
        style={[
          styles.numberContainer,
          currentNumberOfRows === EResultsNumber.TEN ? styles.selected : {},
        ]}>
        <RegularText>{EResultsNumber.TEN}</RegularText>
      </Pressable>
      <Pressable
        style={[
          styles.numberContainer,
          currentNumberOfRows === EResultsNumber.TWENTY ? styles.selected : {},
        ]}
        onPress={() => dispatch(setNumberOfRows(EResultsNumber.TWENTY))}>
        <RegularText>{EResultsNumber.TWENTY}</RegularText>
      </Pressable>
      <Pressable
        style={[
          styles.numberContainer,
          currentNumberOfRows === EResultsNumber.FIFTY ? styles.selected : {},
        ]}
        onPress={() => dispatch(setNumberOfRows(EResultsNumber.FIFTY))}>
        <RegularText>{EResultsNumber.FIFTY}</RegularText>
      </Pressable>
      <Pressable
        style={[
          styles.numberContainer,
          currentNumberOfRows === EResultsNumber.HUNDRED ? styles.selected : {},
        ]}
        onPress={() => dispatch(setNumberOfRows(EResultsNumber.HUNDRED))}>
        <RegularText>{EResultsNumber.HUNDRED}</RegularText>
      </Pressable>
    </View>
  );
};

export default NumberOfRows;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  numberContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.cream,
    marginHorizontal: 5,
  },
  selected: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.black,
    borderRadius: 10,
  },
});
