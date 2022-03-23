import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Image, T} from '@components/atoms';
import {Colors} from '@styles';

const QRCardList = ({item}) => (
  <View style={styles.qrContainer}>
    <Image
      style={styles.qrImageStyle}
      source={{
        uri: item?.qrcode,
      }}
      resizeMode="contain"
    />
    <T text={item?.bookingDate} />
  </View>
);

export default QRCardList;

const styles = StyleSheet.create({
  qrContainer: {
    // padding: 12,
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 2,
    // marginBottom: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  qrImageStyle: {borderRadius: 0, height: 150, width: 150},
});
