import React, {useEffect, useLayoutEffect} from 'react';
import {StyleSheet, FlatList, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {Icon} from 'react-native-elements';
import {Container} from '@components/atoms';
import {QRCardList} from '@components/molecules';
import {Colors} from '@styles/index';
import {MyBookingsActions} from './reducer';
import MyBookingsSelectors from './selectors';

const MyBooking = () => {
  const dispatch = useDispatch();
  const {bookings} = useSelector(MyBookingsSelectors);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{marginLeft: 10}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" type="simple-line-icon" color={Colors.textColor} />
        </Pressable>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    dispatch(MyBookingsActions.myBookReq());
  }, [dispatch]);

  return (
    <Container>
      <FlatList
        contentContainerStyle={styles.containerStyle}
        data={bookings}
        renderItem={QRCardList}
      />
    </Container>
  );
};

export default MyBooking;

const styles = StyleSheet.create({
  containerStyle: {flexGrow: 1},
});
