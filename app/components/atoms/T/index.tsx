import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type TProps = {
  textStyle: {};
  text: string;
};

const T = ({text, textStyle}: TProps) => {
  return <Text style={textStyle}>{text}</Text>;
};

export default T;

const styles = StyleSheet.create({});
