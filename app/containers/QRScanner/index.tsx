import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  useCameraDevices,
  Camera,
  useFrameProcessor,
} from 'react-native-vision-camera';
import {useDispatch, useSelector} from 'react-redux';
import {Barcode, BarcodeFormat, scanBarcodes} from 'vision-camera-code-scanner';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {runOnJS} from 'react-native-reanimated';
import {T} from '@components/atoms';
import {SuccessModal} from '@components/molecules';
import {Colors} from '@styles/index';
import {ScannerActions} from './reducer';
import ScanningSelectors from './selectors';

const QRScanner = () => {
  const [useCamera, setUseCamera] = useState<boolean>(false);
  const [barcodes, setBarcodes] = useState<Barcode[]>([]);
  const navigation = useNavigation();
  const {modalState, isLoading, errorMessage, successMessage} =
    useSelector(ScanningSelectors);
  const dispatch = useDispatch();
  const devices = useCameraDevices();
  const isFocused = useIsFocused();

  const frameProcessor = useFrameProcessor(frame => {
    'worklet';
    const detectedBarcodes = scanBarcodes(frame, [BarcodeFormat.QR_CODE]);
    runOnJS(setBarcodes)(detectedBarcodes);
  }, []);

  useEffect(() => {
    const permission = async () => {
      const cameraPermission = await Camera.requestCameraPermission();

      if (cameraPermission === 'authorized') {
        setUseCamera(true);
      }
    };
    permission();
  }, []);

  useEffect(() => {
    if (barcodes.length > 0 && barcodes[0]?.displayValue) {
      navigation.navigate('QRStatusScreen', {
        displayValue: barcodes[0]?.displayValue,
      });
    }
  }, [barcodes]);

  // useEffect(() => {
  //   navigation.navigate('QRStatusScreen');
  // }, []);

  if (!useCamera || devices?.back == null) {
    return (
      <View style={styles.emptyScanner}>
        <T text="QR Scanner not available" />
      </View>
    );
  }
  return (
    <View style={styles.viewContainer}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={devices?.back}
        isActive={isFocused}
        frameProcessor={frameProcessor}
        frameProcessorFps={5}
      />
      <View style={styles.qrSquarContainer}>
        <View style={styles.qrcodeScanner} />
      </View>

      {/* {barcodes.map((barcode, idx) => (
        <Text key={idx} style={styles.barcodeTextURL}>
          {barcode.displayValue}
        </Text>
      ))} */}

      <SuccessModal
        visible={modalState}
        visibleFun={() => dispatch(ScannerActions.toggleShowModal())}
        title="Please wait scanning in progress"
        loading={isLoading}
        failed={errorMessage}
        failedMessage={errorMessage}
        successMessage={successMessage}
      />
    </View>
  );
};

export default QRScanner;

const styles = StyleSheet.create({
  emptyScanner: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  qrSquarContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  viewContainer: {flex: 1},
  qrcodeScanner: {
    height: 200,
    width: 200,
    borderColor: Colors.primaryColor,
    borderWidth: 6,
  },
  barcodeTextURL: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
