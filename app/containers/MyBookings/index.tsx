import React, {useEffect, useLayoutEffect} from 'react';
import {StyleSheet, FlatList, Pressable} from 'react-native';
import {Icon} from 'react-native-elements';
import {Container} from '@components/atoms';
import {QRCardList} from '@components/molecules';
import {Colors} from '@styles';
import {MyBookingsActions} from './reducer';
import MyBookingsSelectors from './selectors';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

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

  console.log(bookings[0]);

  return (
    <Container>
      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        data={bookings}
        renderItem={QRCardList}
      />
    </Container>
  );
};

export default MyBooking;

const styles = StyleSheet.create({});
