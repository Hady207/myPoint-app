import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header, Icon} from 'react-native-elements';

import {T} from '@atoms';
import {Colors, Scale} from '@styles';
import {useSelector} from 'react-redux';
import rootSelectors from '@containers/Root/selectors';

const DrawerHeader = ({title, homeScreen}: object) => {
  const navigation = useNavigation();
  const {userProfile} = useSelector(rootSelectors);
  const HeaderLeft = () => (
    <Pressable onPress={() => navigation?.toggleDrawer()}>
      <Icon name="menu" type="simple-line-icon" color={Colors.textColor} />
    </Pressable>
  );

  const HeaderRight = () => (
    <Pressable onPress={() => navigation?.navigate('QRcodeScreen')}>
      <Icon
        name="ios-qr-code-outline"
        type="ionicon"
        color={Colors.textColor}
      />
    </Pressable>
  );

  if (homeScreen) {
    return (
      <Header
        backgroundColor={Colors.background}
        leftComponent={<HeaderLeft />}
        centerComponent={<T text={title} />}
        rightComponent={userProfile?.role === 'user' ? <HeaderRight /> : null}
      />
    );
  }

  return (
    <Header
      backgroundColor={Colors.background}
      leftComponent={<HeaderLeft />}
      centerComponent={<T text={title} />}
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
