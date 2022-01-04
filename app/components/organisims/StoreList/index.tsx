import React from 'react';
import {StyleSheet, ScrollView, View, FlatList} from 'react-native';

import {StoreCard} from '@components/molecules';
import {T} from '@components/atoms';
import {useNavigation} from '@react-navigation/native';

const StoreList = () => {
  const navigation = useNavigation();
  const handleNavigation = param => {
    navigation.navigate('StoreScreen', {param});
  };
  const renderItem = ({item}) => (
    <StoreCard onPress={() => handleNavigation(item)} />
  );
  return (
    <View>
      <T text="stores" />
      <FlatList
        numColumns={2}
        contentContainerStyle={{flexGrow: 1}}
        data={[{}, {}, {}, {}, {}]}
        renderItem={renderItem}
      />
    </View>
  );
};

export default StoreList;

const styles = StyleSheet.create({});
