import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Colors} from '@styles/index';
import {T, Modal} from '@components/atoms';

type CalendarModalProps = {
  visible: boolean;
  visibleFun: () => void;
  title?: string;
  numberOfBookings: number;
};

const CalendarModal = ({
  visible,
  visibleFun,
  numberOfBookings,
  ...props
}: CalendarModalProps) => {
  return (
    <Modal isVisible={visible} closing={visibleFun} {...props}>
      <View style={styles.box}>
        <View style={styles.textContainer}>
          <T text="number of users booked this day:" />
          <T text={numberOfBookings} textStyle={styles.textStyle} />
        </View>
      </View>
    </Modal>
  );
};

export default CalendarModal;

const styles = StyleSheet.create({
  box: {
    backgroundColor: Colors.background,
    borderRadius: 10,
    padding: 20,
  },

  textContainer: {flexDirection: 'row', alignItems: 'center'},
  textStyle: {marginLeft: 5},

  choiceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttons: {
    marginHorizontal: 10,
  },
});
