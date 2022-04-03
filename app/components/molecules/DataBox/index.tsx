import {StyleSheet, Pressable, Dimensions} from 'react-native';
import React from 'react';
import {T} from '@atoms';
import {Scale, Colors} from '@styles';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [100, 45, 28, 80, 99, 43],
    },
  ],
};

const dataPie = {
  labels: ['Scanned', 'Not Scanned'], // optional
  data: [0.4, 0.6],
};

const chartConfig = {
  backgroundColor: Colors.primaryColor,
  backgroundGradientFrom: Colors.primaryColor,
  backgroundGradientTo: Colors.primaryColor,
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 12,
  },
  propsForDots: {
    r: '4',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

const windowWidth = Dimensions.get('window').width;

const DataBox = ({item, ...props}) => {
  if (item.model === 'linear') {
    return (
      <Pressable style={styles.boxContainer} {...props}>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={windowWidth - 24} // from react-native
          height={Scale?.moderateScale(180)}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={chartConfig}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
            paddingHorizontal: 10,
          }}
        />
      </Pressable>
    );
  }

  if (item.model === 'barchart') {
    return (
      <Pressable style={styles.boxContainer} {...props}>
        <BarChart
          style={styles.graphStyle}
          data={data}
          width={windowWidth - 24}
          height={Scale?.moderateScale(180)}
          yAxisLabel="$"
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />
      </Pressable>
    );
  }
  if (item.model === 'piechart') {
    return (
      <ProgressChart
        data={dataPie}
        width={windowWidth}
        height={Scale?.moderateScale(180)}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
        style={styles.graphStyle}
      />
    );
  }
  return null;
};

export default DataBox;

const styles = StyleSheet.create({
  boxContainer: {
    // height: Scale?.moderateScale(170),
    // width: Scale?.moderateScale(170),
    // backgroundColor: 'red',
    // borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: 10,
    // marginRight: 10,
    // marginBottom: 10,
  },
  graphStyle: {
    marginVertical: 8,
    borderRadius: 16,
    // paddingHorizontal: 10,
  },
});
