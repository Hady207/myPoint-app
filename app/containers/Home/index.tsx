import React, {useEffect} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, T, Header} from '@components/atoms';
import {FeaturedList, StoreList} from '@components/organisms';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {HomeActions} from './reducer';
import homeSelectors from './selectors';

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {stores} = useSelector(homeSelectors);

  useEffect(() => {
    dispatch(HomeActions.getHomeData());
  }, [dispatch]);

  return (
    <Container>
      <FeaturedList />
      <StoreList data={stores} />
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
