import React from 'react';
import {StyleSheet, ScrollView, View, FlatList} from 'react-native';

import {StoreCard} from '@components/molecules';
import {T} from '@components/atoms';
import {useNavigation} from '@react-navigation/native';

type StoreListProps = {
  data: [];
};

const StoreList = ({data}: StoreListProps) => {
  const navigation = useNavigation();
  const handleNavigation = (store: object) => {
    navigation.navigate('StoreScreen', {store});
  };
  const renderItem = ({item}: {item: {}}) => (
    <StoreCard store={item} onPress={() => handleNavigation(item)} />
  );
  return (
    <>
      <T text="Stores" textStyle={{marginVertical: 10, fontSize: 21}} />
      <FlatList
        numColumns={2}
        contentContainerStyle={{flexGrow: 1}}
        columnWrapperStyle={{alignItems: 'center', justifyContent: 'center'}}
        data={data}
        renderItem={renderItem}
      />
    </>
  );
};

export default StoreList;

const styles = StyleSheet.create({});
