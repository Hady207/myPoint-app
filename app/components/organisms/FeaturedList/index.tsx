import React from 'react';
import {StyleSheet, View, Pressable, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {T} from '@components/atoms';
import {Colors} from '@styles/index';

const FeaturedList = () => {
  const navigation = useNavigation();
  return (
    <View>
      <T text="Categories" textStyle={{marginBottom: 10, fontSize: 21}} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Pressable
          onPress={() =>
            navigation.navigate('CategoryViewScreen', {category: 'resturant'})
          }
          style={styles.cards}>
          <View style={styles.icon}>
            <Icon name="restaurant" type="ionicons" color={'white'} />
          </View>
          <T text="restaurant" textStyle={styles.iconText} />
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate('CategoryViewScreen', {category: 'bank'})
          }
          style={styles.cards}>
          <View style={styles.icon}>
            <Icon name="bank" type="font-awesome" color={'white'} />
          </View>
          <T text="banks" textStyle={styles.iconText} />
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate('CategoryViewScreen', {
              category: 'super market',
            })
          }
          style={styles.cards}>
          <View style={styles.icon}>
            <Icon name="store-alt" type="font-awesome-5" color={'white'} />
          </View>
          <T text="super markets" textStyle={styles.iconText} />
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate('CategoryViewScreen', {category: 'sport'})
          }
          style={styles.cards}>
          <View style={styles.icon}>
            <Icon name="sports" type="material" color={'white'} />
          </View>
          <T text="gyms" textStyle={styles.iconText} />
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default FeaturedList;

const styles = StyleSheet.create({
  cards: {
    height: 70,
    width: 200,
    borderRadius: 10,
    backgroundColor: Colors.primaryColor,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-around',
    marginRight: 10,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 15,
  },
  iconText: {
    fontSize: 16,
    color: 'white',
    textTransform: 'capitalize',
  },
});
