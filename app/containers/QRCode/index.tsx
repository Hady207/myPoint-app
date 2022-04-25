import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Container, Image, T} from '@components/atoms';
import rootSelectors from '@containers/Root/selectors';
import {useSelector} from 'react-redux';
import spacetime from 'spacetime';
import {storageRead} from '@utils/storageUtils';

const QRCode = () => {
  const {latestBookingInfo} = useSelector(rootSelectors);
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      if (latestBookingInfo?.qrCode) {
        setData(latestBookingInfo);
      } else {
        const d = await storageRead('latestBookingInfo');
        setData(d);
      }
    };
    getData();
  }, [latestBookingInfo]);

  // console.log(data);

  return (
    <Container containerStyle={styles.containerStyle}>
      {data?.qrcode ? (
        <>
          <Image
            style={styles.qrImageStyle}
            source={{
              uri: data?.qrcode,
            }}
            resizeMode="contain"
          />
          <View>
            {/* <View style={styles.fieldRow}>
              <T text="Appointment location: " size={16} />
              <T text="Golds Gym" size={16} />
            </View> */}
            <View style={styles.fieldRow}>
              <T text="Time: " size={16} />
              <T text={spacetime(data?.bookingTime).format('time')} size={16} />
            </View>
            <View style={styles.fieldRow}>
              <T text="Date: " size={16} />
              <T
                text={spacetime(data?.bookingDate).format('numeric-uk')}
                size={16}
              />
            </View>
          </View>
        </>
      ) : (
        <>
          <T text="No Booking Avaliable" />
        </>
      )}
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
