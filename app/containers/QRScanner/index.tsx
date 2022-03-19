import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  useCameraDevices,
  Camera,
  useFrameProcessor,
} from 'react-native-vision-camera';
import {Barcode, BarcodeFormat, scanBarcodes} from 'vision-camera-code-scanner';
import {useIsFocused} from '@react-navigation/native';
import {runOnJS} from 'react-native-reanimated';
import {Colors} from '@styles';

const QRScanner = () => {
  const [useCamera, setUseCamera] = useState<boolean>(false);
  const [barcodes, setBarcodes] = useState<Barcode[]>([]);
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

  if (!useCamera || devices?.back == null) {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>QRScanner</Text>
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
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
      {barcodes.map((barcode, idx) => (
        <Text key={idx} style={styles.barcodeTextURL}>
          {barcode.displayValue}
        </Text>
      ))}
    </View>
  );
};

export default QRScanner;

const styles = StyleSheet.create({
  qrSquarContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
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
