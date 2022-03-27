import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Container, Image, T} from '@components/atoms';
import rootSelectors from '@containers/Root/selectors';
import {useSelector} from 'react-redux';
import spacetime from 'spacetime';

const QRCode = () => {
  const {latestBookingInfo} = useSelector(rootSelectors);

  return (
    <Container containerStyle={styles.containerStyle}>
      <Image
        style={styles.qrImageStyle}
        source={{
          uri: latestBookingInfo.qrcode,
        }}
        resizeMode="contain"
      />
      <View>
        <View style={styles.fieldRow}>
          <T text="Appointment location: " size={16} />
          <T text="Golds Gym" size={16} />
        </View>
        <View style={styles.fieldRow}>
          <T text="Time: " size={16} />
          <T text={latestBookingInfo.bookingTime} size={16} />
        </View>
        <View style={styles.fieldRow}>
          <T text="Date: " size={16} />
          <T
            text={spacetime(latestBookingInfo.bookingDate).format('numeric-uk')}
            size={16}
          />
        </View>
      </View>
    </Container>
  );
};

export default QRCode;

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  qrImageStyle: {height: 250, width: 250},
  fieldRow: {flexDirection: 'row'},
});
