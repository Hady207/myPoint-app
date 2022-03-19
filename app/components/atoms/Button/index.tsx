import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {Colors} from '@styles';

type MyButton = {
  outline: boolean;
  buttonStyle: {};
  title: string;
  titleStyle: object;
};

const MyButton = ({
  outline,
  buttonStyle,
  title,
  titleStyle,
  ...props
}: MyButton) => {
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
    backgroundColor: Colors.primaryColor,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderColor: Colors.primaryColor,
  },
  outlineTitleStyle: {color: 'black'},
  defaultTitleStyle: {
    fontSize: 16,
    textTransform: 'capitalize',
  },
});
