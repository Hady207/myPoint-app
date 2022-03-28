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
          uri: params?.store?.image,
        }}
        resizeMode="contain"
      />
      <View
        style={{
          marginTop: 20,
          borderTopWidth: 1,
          paddingTop: 20,
          paddingHorizontal: 10,
        }}>
        <T text={params?.store?.name} textStyle={{fontSize: 20}} />
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <T text="Category: " textStyle={{fontSize: 20}} />
          <T
            text={params?.store?.category}
            textStyle={{fontSize: 20, textTransform: 'capitalize'}}
          />
        </View>
      </View>
      <View
        style={{flex: 1, justifyContent: 'flex-end', paddingHorizontal: 10}}>
        <Button
          onPress={() =>
            navigation.navigate('BookingScreen', {storeId: params.store._id})
          }
          title="Book Now"
        />
      </View>
    </Container>
  );
};

export default StoreDetails;

const styles = StyleSheet.create({});
