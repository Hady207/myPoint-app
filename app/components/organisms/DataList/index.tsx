import React, {useEffect} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AnalyticBox} from '@components/molecules';

import AnalyticsSelectors from '@containers/Analytics/selectors';
import {AnalyticsActions} from '@containers/Analytics/reducer';

const DataList = () => {
  const {yearlyData, hourlyData, ratioData, dataListLoading} =
    useSelector(AnalyticsSelectors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AnalyticsActions.analyticsReq());
  }, [dispatch]);

  return (
    <ScrollView>
      <AnalyticBox
        item={{
          model: 'linear',
          title: 'Booked Users This Year',
          data: yearlyData,
        }}
      />
      <AnalyticBox
        item={{
          model: 'piechart',
          title: 'Rush Hours Frequency',
          data: hourlyData,
        }}
      />
      <AnalyticBox
        item={{model: 'piechart', title: 'qr scan ratio', data: ratioData}}
      />

      <View />
    </ScrollView>
  );
};

export default DataList;

const styles = StyleSheet.create({});
