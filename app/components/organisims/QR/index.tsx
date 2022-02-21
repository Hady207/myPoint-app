import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useCameraDevices, Camera} from 'react-native-vision-camera';
import {useIsFocused} from '@react-navigation/native';
import {Colors} from '@styles';

const QR = () => {
  const [useCamera, setUseCamera] = useState(false);
  useEffect(() => {
    const permission = async () => {
      const cameraPermission = await Camera.requestCameraPermission();

      if (cameraPermission === 'authorized') {
        setUseCamera(true);
      }
    };
    permission();
  }, []);

  const devices = useCameraDevices();

  const isFocused = useIsFocused();
  if (!useCamera || devices?.back == null) {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>QRScanner</Text>
      </View>
    );
  }
  return (
    <View style={styles.camera}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={devices?.back}
        isActive={isFocused}
      />
      <View style={styles.boxContainer}>
        <View style={styles.qrcodeScanner} />
      </View>
    </View>
  );
};

export default QR;

const styles = StyleSheet.create({
  camera: {flex: 1},
  boxContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrcodeScanner: {
    height: 200,
    width: 200,
    borderColor: Colors.primaryColor,
    borderWidth: 6,
  },
});
