import {StyleSheet, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import spacetime from 'spacetime';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Icon} from 'react-native-elements';
import {T, Button, Container} from '@components/atoms';
import {Colors} from '@styles/index';

const Booking = () => {
  const navigation = useNavigation();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [mode, setMode] = useState<string>('date');
  const [dateSelected, setDateSelected] = useState('');
  const [timeSelected, setTimeSelected] = useState<string>('');

  const showDatePicker = mode => {
    setDatePickerVisibility(true);
    setMode(mode);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    // console.warn('A date has been picked: ', date);
    if (mode === 'date') {
      setDateSelected(date);
    } else {
      setTimeSelected(date);
    }
    console.log(date);
    hideDatePicker();
  };
  return (
    <Container>
      <View style={styles.mainContainer}>
        <T text="Please Pick a suitable time for you" size={19} />
      </View>
      <Pressable
        onPress={() => showDatePicker('date')}
        style={[styles.dropdownStyle, !!!dateSelected && styles.fullBorder]}>
        <T text="Show Date Picker" size={16} color="white" />
        <Icon type="entypo" name="chevron-down" color="white" />
      </Pressable>

      {!!dateSelected && (
        <View style={styles.dropdownChoice}>
          <T text={spacetime(dateSelected).format('numeric-uk')} size={16} />
        </View>
      )}

      <Pressable
        onPress={() => showDatePicker('time')}
        style={[styles.dropdownStyle, !!!timeSelected && styles.fullBorder]}>
        <T text="Show Time Picker" color="white" />
        <Icon type="entypo" name="chevron-down" color="white" />
      </Pressable>

      {!!timeSelected && (
        <View style={styles.dropdownChoice}>
          <T text={spacetime(timeSelected).format('time')} size={16} />
        </View>
      )}

      <View style={styles.footerContainer}>
        <Button
          title="confirm"
          onPress={() => navigation.navigate('QRcodeScreen')}
        />
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Container>
  );
};

export default Booking;

const styles = StyleSheet.create({
  mainContainer: {alignItems: 'center'},
  footerContainer: {
    justifyContent: 'flex-end',
    flex: 1,
  },

  fullBorder: {
    borderRadius: 10,
  },

  dropdownStyle: {
    backgroundColor: Colors.primaryColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },

  dropdownChoice: {
    backgroundColor: Colors.lightGrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
