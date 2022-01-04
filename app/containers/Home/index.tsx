import React from 'react';
import {Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, T} from '@components/atoms';
import {FeaturedList, StoreList} from '@components/organisims';
import {ScrollView} from 'react-native-gesture-handler';

const Home = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <FeaturedList />
      <StoreList />
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
