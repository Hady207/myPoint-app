import React from 'react';
import {Text} from 'react-native';
import {Colors, Scale} from '@styles/index';

type TProps = {
  textStyle?: {};
  text: any;
  color?: string;
  size?: number;
};

const T = ({text, textStyle, color, size}: TProps) => {
  const defaultStyles = {
    color,
    fontSize: Scale.moderateScale(size),
  };
  return <Text style={[defaultStyles, textStyle]}>{text}</Text>;
};

T.defaultProps = {
  color: Colors.textColor,
  size: 14,
  isDate: false,
};

export default T;
