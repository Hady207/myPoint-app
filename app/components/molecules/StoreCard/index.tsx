import React from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import {T, Image} from '@components/atoms';

type StoreCardProps = {
  store: object;
};

const StoreCard = ({store, ...props}: StoreCardProps) => {
  return (
    <Pressable style={styles.cards} {...props}>
      <Image
        style={{height: '100%', width: '100%', borderRadius: 0}}
        source={{
          uri: store?.image,
        }}
        resizeMode="contain"
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
    marginRight: 10,
    marginTop: 10,
  },

  imageStyle: {height: '100%', width: '100%', borderRadius: 0},
});
