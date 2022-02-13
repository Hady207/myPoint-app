import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';

type ContainerProps = {
  containerStyle?: {};
  children: React.ReactNode;
};

const Container = ({containerStyle, children}: ContainerProps) => {
  return (
    <SafeAreaView style={[styles.globalSafeAreaStyle]}>
      <View style={[styles.screen, containerStyle]}>{children}</View>
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  globalSafeAreaStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  screen: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});
