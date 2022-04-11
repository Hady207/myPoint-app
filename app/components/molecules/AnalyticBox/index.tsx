import {StyleSheet, Pressable, Dimensions, View} from 'react-native';
import React from 'react';
import {
  LineChart,
  BarChart,
  ProgressChart,
  PieChart,
} from 'react-native-chart-kit';
import {T} from '@components/atoms';
import {Scale, Colors} from '@styles/index';

// const data = {
//   labels: ['Jan', 'Feb', 'March', 'April', 'May'],
//   datasets: [
//     {
//       data: [100, 45, 28, 80, 99, 43],
//     },
//   ],
// };

const dataPie = {
  labels: ['morning', 'evening'], // optional
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

const progressConfig = {
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
  propsForLabels: {
    x: '100',
    // y: '50',
  },
};

const windowWidth = Dimensions.get('window').width;

const DataBox = ({item, data, ...props}) => {
  if (item.model === 'linear-time') {
    return (
      <Pressable {...props}>
        <View style={{flex: 1, marginTop: 20}}>
          <T
            text="Most Frequent Booked timings"
            textStyle={{textAlign: 'left', flex: 1}}
            size={20}
          />
        </View>
        <View style={styles.graphChartContainer}>
          <LineChart
            data={{
              labels: ['Morning', 'Evening'],
              datasets: [
                {
                  data: [1, 2],
                },
              ],
            }}
            width={windowWidth} // from react-native
            height={Scale?.moderateScale(180)}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={chartConfig}
            // bezier
            style={{
              marginVertical: 8,
            }}
          />
        </View>
      </Pressable>
    );
  }

  if (item.model === 'linear') {
    return (
      <Pressable {...props}>
        <View style={{flex: 1, marginTop: 20}}>
          <T
            text="Booked Users This Year"
            textStyle={{textAlign: 'left', flex: 1}}
            size={20}
          />
        </View>
        <View style={styles.graphChartContainer}>
          <LineChart
            data={data}
            width={windowWidth} // from react-native
            height={Scale?.moderateScale(180)}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={chartConfig}
            bezier
            style={{
              marginVertical: 8,
            }}
          />
        </View>
      </Pressable>
    );
  }

  if (item.model === 'barchart') {
    return (
      <Pressable {...props}>
        <View style={{flex: 1, marginTop: 20}}>
          <T
            text="Booked User this month"
            textStyle={{textAlign: 'left', flex: 1}}
            size={20}
          />
        </View>
        <View style={styles.graphChartContainer}>
          <BarChart
            style={styles.graphStyle}
            data={data}
            width={windowWidth}
            height={Scale?.moderateScale(180)}
            yAxisLabel="$"
            chartConfig={chartConfig}
            verticalLabelRotation={30}
          />
        </View>
      </Pressable>
    );
  }
  if (item.model === 'piechart') {
    return (
      <Pressable {...props}>
        <View style={{flex: 1, marginTop: 20, marginBottom: 10}}>
          <T
            text="Rush Hours Frequency"
            textStyle={{textAlign: 'left', flex: 1}}
            size={20}
          />
        </View>
        <View style={styles.graphChartContainer}>
          <PieChart
            data={data}
            width={windowWidth}
            height={220}
            chartConfig={chartConfig}
            accessor={'total'}
            backgroundColor={Colors.primaryColor}
            paddingLeft={'0'}
            center={[0, 0]}
            // absolute
          />
        </View>
      </Pressable>
    );
  }
  if (item.model === 'progressChart') {
    return (
      <Pressable {...props}>
        <View style={{flex: 1, marginTop: 20}}>
          <T
            text="Booked User this month"
            textStyle={{textAlign: 'left', flex: 1}}
            size={20}
          />
        </View>
        <View style={styles.graphChartContainer}>
          <ProgressChart
            data={dataPie}
            width={windowWidth}
            height={Scale?.moderateScale(180)}
            chartConfig={progressConfig}
            style={styles.graphStyle}
          />
        </View>
      </Pressable>
    );
  }
  return null;
};

export default DataBox;

const styles = StyleSheet.create({
  graphChartContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
  },
  graphStyle: {
    marginVertical: 8,
    // borderRadius: 16,
    // paddingHorizontal: 10,
  },
});
