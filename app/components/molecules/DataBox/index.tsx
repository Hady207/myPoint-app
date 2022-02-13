import {StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {T} from '@atoms';
import {Scale} from '@styles';

const DataBox = ({...props}) => {
  return (
    <Pressable style={styles.boxContainer} {...props}>
      <T text="DataBox" />
    </Pressable>
  );
};

export default DataBox;

const styles = StyleSheet.create({
  boxContainer: {
    height: Scale?.moderateScale(170),
    // width: Scale?.moderateScale(170),
    backgroundColor: 'red',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
});
