import React from 'react';
import {StyleSheet, ScrollView, View, FlatList} from 'react-native';

import {DataBox} from '@components/molecules';
import {T} from '@components/atoms';
import {useNavigation} from '@react-navigation/native';

const DataList = () => {
  const navigation = useNavigation();
  const handleNavigation = (param: {}) => {
    navigation.navigate('StoreScreen', {param});
  };
  const renderItem = ({item}: {item: {}}) => <DataBox item={item} />;
  return (
    <View>
      {/* <T text="Data" textStyle={{marginVertical: 10, fontSize: 21}} /> */}
      <FlatList
        // numColumns={1}
        contentContainerStyle={{flexGrow: 1}}
        data={[{model: 'linear'}, {model: 'piechart'}, {model: 'barchart'}]}
        renderItem={renderItem}
      />
    </View>
  );
};

export default DataList;

const styles = StyleSheet.create({});
