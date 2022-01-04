import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

const MyButton = ({
  outline,
  buttonStyle,
  title,
  intlType,
  titleStyle,
  ...props
}) => {
  return (
    <Button
      type={outline ? 'outline' : 'solid'}
      buttonStyle={[
        styles.button,
        outline && styles.outlineButton,
        buttonStyle,
      ]}
      title={title}
      titleStyle={[
        styles.defaultTitleStyle,
        outline && styles.outlineTitleStyle,
        titleStyle,
      ]}
      {...props}
    />
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    height: 60,
    backgroundColor: '#FF1493',
  },
  outlineButton: {backgroundColor: null, borderColor: 'red'},
  outlineTitleStyle: {color: 'black'},
  defaultTitleStyle: {
    fontSize: 16,
    textTransform: 'capitalize',
  },
});
