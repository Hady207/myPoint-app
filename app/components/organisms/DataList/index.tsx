import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {AnalyticBox} from '@components/molecules';

import AnalyticsSelectors from '@containers/Analytics/selectors';

const DataList = () => {
  const {yearlyData, hourlyData} = useSelector(AnalyticsSelectors);
  return (
    <ScrollView>
      <AnalyticBox item={{model: 'linear'}} data={yearlyData} />
      <AnalyticBox item={{model: 'piechart'}} data={hourlyData} />
    </ScrollView>
  );
};

export default DataList;

const styles = StyleSheet.create({});
