import {StyleSheet, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import spacetime from 'spacetime';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Icon} from 'react-native-elements';
import {T, Button, Container} from '@components/atoms';
import {Colors} from '@styles/index';
import {useDispatch, useSelector} from 'react-redux';
import {BookActions} from './reducer';
import bookingSelectors from './selectors';
import rootSelector from '@containers/Root/selectors';
import {ErrorMessage} from '@components/molecules';

const Booking = () => {
  const dispatch = useDispatch();
  const {params} = useRoute();
  const {isLoading, errorMessage} = useSelector(bookingSelectors);
  const {userProfile} = useSelector(rootSelector);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [mode, setMode] = useState<string>('date');
  const [dateSelected, setDateSelected] = useState('');
  const [timeSelected, setTimeSelected] = useState<string>('');

  const showDatePicker = (modeOption: string) => {
    setDatePickerVisibility(true);
    setMode(modeOption);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (selectedData: any) => {
    // console.warn('A date has been picked: ', date);
    if (mode === 'date') {
      setDateSelected(selectedData);
    } else {
      setTimeSelected(selectedData);
    }

    hideDatePicker();
  };

  const handleBookConfirm = () => {
    userProfile?.id &&
      dispatch(BookActions.bookReq(params.storeId, dateSelected, timeSelected));
    // navigation.navigate('QRcodeScreen');
  };

  return (
    <Container>
      <View style={styles.mainContainer}>
        <T text="Please pick a suitable time for you" size={19} />
      </View>
      <Pressable
        onPress={() => showDatePicker('date')}
        style={[styles.dropdownStyle, !!!dateSelected && styles.fullBorder]}>
        <T text="Show Date Picker" size={16} color="white" />
        <Icon type="entypo" name="chevron-down" color="white" />
      </Pressable>

      {!!dateSelected && (
        <View style={styles.dropdownChoice}>
          <T
            text={spacetime(dateSelected).format(
              '{year}-{iso-month}-{date-pad}',
            )}
            size={16}
          />
        </View>
      )}

      <Pressable
        onPress={() => showDatePicker('time')}
        style={[styles.dropdownStyle, !!!timeSelected && styles.fullBorder]}>
        <T text="Show Time Picker" color="white" size={16} />
        <Icon type="entypo" name="chevron-down" color="white" />
      </Pressable>

      {!!timeSelected && (
        <View style={styles.dropdownChoice}>
          <T text={spacetime(timeSelected).format('time')} size={16} />
        </View>
      )}

      <View style={styles.footerContainer}>
        <ErrorMessage message={errorMessage} />
        <Button
          title="confirm"
          onPress={handleBookConfirm}
          loading={isLoading}
          disabled={isLoading || !userProfile?.id}
        />
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={handleDateConfirm}
        minimumDate={new Date()}
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
    marginBottom: 20,
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
