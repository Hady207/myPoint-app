import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, T, Image, Button} from '@components/atoms';
import {useNavigation, useRoute} from '@react-navigation/native';

const StoreDetails = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  console.log(params);
  return (
    <Container containerStyle={{paddingHorizontal: 0}}>
      <Image
        style={{
          height: '40%',
          width: '100%',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
        source={{
          uri: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80',
        }}
      />
      <View style={{marginTop: 20}}>
        <T text="storeName" />
        <T text="storeName" />
        <T text="storeName" />
        <T text="storeName" />
        <T text="storeName" />
        <T text="storeName" />
        <T text="storeName" />
        <T text="storeName" />
      </View>
      <View
        style={{flex: 1, justifyContent: 'flex-end', paddingHorizontal: 10}}>
        <Button
          onPress={() =>
            navigation.navigate('BookingScreen', {storeId: params.param._id})
          }
          title="Book Now"
        />
      </View>
    </Container>
  );
};

export default StoreDetails;

const styles = StyleSheet.create({});
