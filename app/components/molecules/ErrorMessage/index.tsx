import {StyleSheet, View} from 'react-native';
import {T} from '@components/atoms';
import {Colors} from '@styles';
import React from 'react';

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({message}: ErrorMessageProps) => {
  return (
    <View style={styles.errorMessageContainer}>
      <T text={message} textStyle={styles.errorMessageStyle} />
    </View>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  errorMessageContainer: {
    paddingVertical: 10,
    marginBottom: 20,
  },
  errorMessageStyle: {
    textAlign: 'center',
    textTransform: 'capitalize',
    color: Colors.dangerRed,
  },
});
