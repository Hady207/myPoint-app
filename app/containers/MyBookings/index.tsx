import {StyleSheet, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {Container} from '@components/atoms';
import {QRCardList} from '@components/molecules';
import {MyBookingsActions} from './reducer';
import MyBookingsSelectors from './selectors';
import {useDispatch, useSelector} from 'react-redux';

const MyBooking = () => {
  const dispatch = useDispatch();
  const {bookings} = useSelector(MyBookingsSelectors);

  useEffect(() => {
    dispatch(MyBookingsActions.myBookReq());
  }, [dispatch]);

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
