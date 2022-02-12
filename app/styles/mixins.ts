import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  columnCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnCenterAlignStart: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  columnBetweenAlignTop: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  columnBetweenAlignEnd: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowAroundAlignBase: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'baseline',
  },
  rowBetweenAlignBase: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  rowBetweenAlignStart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  circle: (size: number, color: string) => ({
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: color,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }),
});

export {styles};
