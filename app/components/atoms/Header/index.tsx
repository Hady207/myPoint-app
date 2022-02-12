import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header, Icon} from 'react-native-elements';

import {T} from '@atoms';
import {Colors, Scale} from '@styles';

const DrawerHeader = ({title}: object) => {
  const navigation = useNavigation();

  const HeaderLeft = () => (
    <Pressable onPress={() => navigation?.toggleDrawer()}>
      <Icon name="menu" type="simple-line-icon" color={Colors.textColor} />
    </Pressable>
  );

  return (
    <Header
      backgroundColor={Colors.background}
      leftComponent={<HeaderLeft />}
      centerComponent={<T text={title} />}
      // rightComponent={{ icon: 'home', color: '#fff' }}
    />
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  logoContainer: {
    // height: 100,
    // width: 100,
    flex: 1,
    // backgroundColor: 'red',
  },
  logoStyle: {
    // width: '100%',
    height: '100%',
    aspectRatio: Scale.moderateScale(511) / Scale.moderateScale(118),
    // marginTop: -10,
  },
});
