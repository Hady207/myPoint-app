import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useCameraDevices, Camera} from 'react-native-vision-camera';
import {useIsFocused} from '@react-navigation/native';

const QRScanner = () => {
  const devices = useCameraDevices();
  const isFocused = useIsFocused();
  if (devices?.back == null) {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>QRScanner</Text>
      </View>
    );
  }
  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={devices?.back}
      isActive={isFocused}
    />
  );
};

export default QRScanner;

const styles = StyleSheet.create({});
