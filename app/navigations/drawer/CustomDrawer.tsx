import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Divider} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {RootScreenActions} from '@containers/Root/reducer';
import rootSelectors from '@containers/Root/selectors';
import {T, Button} from '@atoms';
import {Colors, Mixins} from '@styles';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const ProfileSection = ({navigation, userProfile, ...props}) => {
  const navigateToLogin = () => navigation.navigate('Login');
  const navigateToSignup = () => navigation.navigate('Signup');
  return (
    <>
      {userProfile?.id ? (
        <View style={styles.profileContainer}>
          <Avatar
            size="medium"
            overlayContainerStyle={styles.profileAvatarStyle}
            titleStyle={styles.profileAvatarTextStyle}
            rounded
            title={userProfile?.username[0] || 'U'}
          />
          <View style={styles.nameContainer}>
            <T text={userProfile?.username} />
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <Button
            title="login"
            buttonStyle={styles.loginBtnStyle}
            onPress={navigateToLogin}
          />
          <Button
            title="Signup"
            outline
            buttonStyle={styles.signupBtnStyle}
            onPress={navigateToSignup}
          />
        </View>
      )}
    </>
  );
};

const CustomDrawer = props => {
  const dispatch = useDispatch();

  const {userProfile} = useSelector(rootSelectors);

  return (
    <DrawerContentScrollView {...props}>
      <ProfileSection {...props} userProfile={userProfile} />
      <Divider style={styles.dividerStyle} />
      <DrawerItemList {...props} />
      <Divider style={styles.dividerStyle} />
      {userProfile?.id && (
        <DrawerItem
          label={({color}) => (
            <T
              text="Logout"
              color={Colors.dangerRed}
              textStyle={{textAlign: 'left'}}
            />
          )}
          onPress={() => {
            dispatch(RootScreenActions.signOut());
            // navigation.reset({
            //   routes: [{ name: 'AuthStack' }],
            // });
          }}
        />
      )}
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 30,
    marginLeft: 10,
  },
  profileAvatarStyle: {
    backgroundColor: Colors.primaryColor,
  },
  profileAvatarTextStyle: {textTransform: 'capitalize'},
  nameContainer: {
    ...Mixins.rowBetween,
    marginLeft: 10,
  },
  container: {padding: 10},
  loginBtnStyle: {height: 50},
  signupBtnStyle: {height: 50, marginTop: 10},
  dividerStyle: {
    marginBottom: 10,
  },
});
