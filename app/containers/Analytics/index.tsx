import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';

import {Container, T} from '@components/atoms';
import spacetime from 'spacetime';
import {DataList} from '@components/organisms';
import {AnalyticsActions} from './reducer';
import AnalyticsSelectors from './selectors';
import {Colors} from '@styles/index';

const DataCharts = () => {
  const dispatch = useDispatch();
  const {bookings, isLoading} = useSelector(AnalyticsSelectors);

  useEffect(() => {
    dispatch(AnalyticsActions.getStore());
  }, [dispatch]);

  const da = bookings?.filter(
    (data: RootStateOrAny) =>
      data?.bookingDate ===
      spacetime(new Date()).format('{year}-{iso-month}-{date-pad}'),
  );

  return (
    <View style={styles.homeContainer}>
      {isLoading ? (
        <ActivityIndicator
          animating={isLoading}
          size="large"
          color={Colors.primaryColor}
          style={{flex: 1}}
        />
      ) : (
        <>
          <View style={styles.numbOfContainer}>
            <T text="Booked Users Today:" size={21} />
            <T text={da?.length} size={21} textStyle={styles.textLengthStyle} />
          </View>
          <DataList />
        </>
      )}
    </View>
  );
};

export default DataCharts;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  textLengthStyle: {marginLeft: 10},
  numbOfContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: Colors.disabledGrey,
    paddingBottom: 15,
  },
});
