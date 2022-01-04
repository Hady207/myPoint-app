import React from 'react';
import {StyleSheet, View, Pressable, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Image from '../Image';
import {T} from '../T';

// Header Component for home screen

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <T text="myPoint" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 0,
  },
  logoStyle: {width: 'auto', height: 37, aspectRatio: 511 / 118},
  notificationContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    marginEnd: 10,
  },
});
