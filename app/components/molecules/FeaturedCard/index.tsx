import React from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import {T} from '@components/atoms';

const FeaturedCard = () => {
  return (
    <Pressable style={styles.cards}>
      <View>
        <T text="icon here" />
      </View>
      <T text="test" />
    </Pressable>
  );
};

export default FeaturedCard;

const styles = StyleSheet.create({
  cards: {
    height: 70,
    width: 200,
    borderRadius: 10,
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginRight: 10,
  },
});
