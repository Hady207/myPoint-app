import React from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import {T, Image} from '@components/atoms';

const StoreCard = ({...props}) => {
  return (
    <Pressable style={styles.cards} {...props}>
      <Image
        style={{height: '100%', width: '100%', borderRadius: 10}}
        source={{
          uri: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80',
        }}
      />
    </Pressable>
  );
};

export default StoreCard;

const styles = StyleSheet.create({
  cards: {
    height: 200,
    width: 180,
    borderRadius: 10,
    backgroundColor: 'red',
    marginRight: 10,
    marginTop: 10,
  },
});
