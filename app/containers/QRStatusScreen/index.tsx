import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Container, T} from '@components/atoms';
import LottieTick from '@assets/lottie/success.json';
import LottieLoader from '@assets/lottie/loader.json';
import LottieFailed from '@assets/lottie/error.json';
import ScannerSelector from '../QRScanner/selectors';
import {ScannerActions} from '../QRScanner/reducer';
import {useRoute} from '@react-navigation/native';

const QRStatusScreen = () => {
  const {isLoading, successMessage, errorMessage} =
    useSelector(ScannerSelector);

  const {params} = useRoute();

  const dispatch = useDispatch();

  useEffect(() => {
    if (params?.displayValue)
      dispatch(ScannerActions.scanBarcode(params?.displayValue));
  }, [params?.displayValue]);

  return (
    <Container>
      <View style={styles.lottieContainer}>
        {isLoading ? (
          <>
            <LottieView
              style={styles.lottieViewStyle}
              source={LottieLoader}
              autoPlay
              // loop
            />
            <T
              text="Please Wait proccssing your qr code"
              textStyle={styles.textStyle}
            />
          </>
        ) : (
          <>
            {successMessage && (
              <>
                <LottieView
                  style={[styles.lottieViewStyle, {height: 150}]}
                  source={LottieTick}
                  autoPlay
                />
                <T text={successMessage} textStyle={styles.textStyle} />
              </>
            )}

            {errorMessage && (
              <>
                <LottieView
                  style={[styles.lottieViewStyle, {height: 120}]}
                  source={LottieFailed}
                  autoPlay
                />
                <T text={errorMessage} textStyle={styles.textStyle} />
              </>
            )}
          </>
        )}
      </View>
    </Container>
  );
};

export default QRStatusScreen;

const styles = StyleSheet.create({
  lottieContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  lottieViewStyle: {
    height: 70,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  textStyle: {textAlign: 'center', fontSize: 16},
});
