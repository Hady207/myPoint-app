import {ActivityIndicator, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {Container} from '@components/atoms';
import {StoreList} from '@components/organisms';
import homeSelectors from '@containers/Home/selectors';
import categorySelectors from './selectors';
import {CategoryActions} from './reducer';

const CategoryView = () => {
  const {isLoading} = useSelector(categorySelectors);
  const {stores} = useSelector(homeSelectors);
  const dispatch = useDispatch();
  const {params} = useRoute();

  const [data, setData] = useState();

  useEffect(() => {
    const daw = stores.filter(store => store?.category === params?.category);
    setData(daw);
  }, [dispatch, params?.category]);
  return (
    <Container>
      {isLoading ? <ActivityIndicator /> : <StoreList data={data} />}
    </Container>
  );
};

export default CategoryView;

const styles = StyleSheet.create({});
