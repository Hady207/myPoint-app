import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Image, T} from '@components/atoms';
import spacetime from 'spacetime';
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
    <View style={styles.textContainer}>
      <T text={item?.store?.name} textStyle={styles.storeNameTextStyle} />
      <T text={spacetime(item?.bookingDate).format('numeric-uk')} />
    </View>
  </View>
);

export default QRCardList;

const styles = StyleSheet.create({
  qrContainer: {
    flexDirection: 'row',
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 5,
    alignItems: 'center',
  },
  qrImageStyle: {borderRadius: 0, height: 150, width: 150},

  textContainer: {marginLeft: 10},

  storeNameTextStyle: {
    marginBottom: 10,
    textTransform: 'capitalize',
  },
});
