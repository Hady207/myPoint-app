import React from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import {FeaturedCard} from '@components/molecules';
import {T} from '@components/atoms';

const FeaturedList = () => {
  return (
    <View>
      <T text="featured list" />
      <ScrollView horizontal>
        <FeaturedCard />
        <FeaturedCard />
      </ScrollView>
    </View>
  );
};

export default FeaturedList;

const styles = StyleSheet.create({});
