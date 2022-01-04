import React from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import {T} from '@components/atoms';
import {Icon} from 'react-native-elements';

const FeaturedCard = () => {
  return (
    <Pressable style={styles.cards}>
      <View style={styles.icon}>
        <Icon name="store-alt" type="font-awesome-5" color={'white'} />
      </View>
      <T text="Stores" textStyle={{fontSize: 16, color: 'white'}} />
    </Pressable>
  );
};

export default FeaturedCard;

const styles = StyleSheet.create({
  cards: {
    height: 70,
    width: 200,
    borderRadius: 10,
    backgroundColor: '#FF1493',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-around',
    marginRight: 10,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 15,
  },
});
