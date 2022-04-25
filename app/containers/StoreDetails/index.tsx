import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Container, T, Image, Button} from '@components/atoms';
import {useNavigation, useRoute} from '@react-navigation/native';
import rootSelector from '@containers/Root/selectors';

const StoreDetails = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const {userProfile} = useSelector(rootSelector);
  return (
    <Container containerStyle={{paddingHorizontal: 0}}>
      <Image
        style={styles.imageContainer}
        source={{
          uri: params?.store?.image,
        }}
        resizeMode="contain"
      />
      <View style={styles.infoContainer}>
        <T text={params?.store?.name} textStyle={{fontSize: 20}} />
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <T text="Category: " textStyle={{fontSize: 20}} />
          <T
            text={params?.store?.category}
            textStyle={{fontSize: 20, textTransform: 'capitalize'}}
          />
        </View>
      </View>
      <View style={styles.bookingContainer}>
        <Button
          onPress={() =>
            userProfile?.id &&
            navigation.navigate('BookingScreen', {storeId: params.store._id})
          }
          disabled={!userProfile?.id}
          title="Book Now"
        />
      </View>
    </Container>
  );
};

export default StoreDetails;

const styles = StyleSheet.create({
  imageContainer: {
    height: '40%',
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  infoContainer: {
    marginTop: 20,
    borderTopWidth: 2,
    paddingTop: 20,
    paddingHorizontal: 10,
    borderTopColor: 'grey',
  },
  bookingContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
