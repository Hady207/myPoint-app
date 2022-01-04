import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const T = ({text, textStyle}) => {
  return <Text style={textStyle}>{text}</Text>;
};

export default T;

const styles = StyleSheet.create({});
