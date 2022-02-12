import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {RootScreenActions} from '@containers/Root/reducer';
import {T} from '@atoms';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Colors, Mixins} from '@styles';

const CustomDrawer = props => {
  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileContainer}>
        <Avatar
          size="medium"
          overlayContainerStyle={{
            backgroundColor: 'blue',
          }}
          rounded
          title={'U'}
        />
        <View style={styles.nameContainer}>
          <T text="hi_nav" />
          <T text={'hadi'} />
        </View>
      </View>

      <DrawerItemList {...props} />
      {/* <DrawerItem
        label={({color}) => (
          <T
            title="choose_language"
            color={color}
            textStyle={{textAlign: 'left'}}
          />
        )}
        onPress={() => {
          props.navigation.toggleDrawer();
          dispatch(RootScreenActions.languageModalToggler());
        }}
      /> */}
      <DrawerItem
        label={({color}) => (
          <T
            title="logout"
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
  nameContainer: {
    ...Mixins.rowBetween,
    marginLeft: 10,
  },
});
