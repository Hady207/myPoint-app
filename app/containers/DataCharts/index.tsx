import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Container} from '@components/atoms';
import {DataBox} from '@components/molecules';
import {DataList} from '@components/organisims';

const DataCharts = () => {
  return (
    <Container>
      <DataList />
    </Container>
  );
};

export default DataCharts;

const styles = StyleSheet.create({});
