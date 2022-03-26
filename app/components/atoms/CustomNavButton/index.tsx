import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {Colors} from '@styles';
import {T} from '@atoms';

// Main Right Header

const CustomNavButton = ({
  title,
  icon,
  size,
  color = Colors.textColor,
  children,
  buttonStyle,
  titleStyle,
}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={[styles.headerRightContainerStyle, buttonStyle]}
      onPress={() => navigation.navigate('HomeScreen')}>
      {!children ? (
        <>
          {title ? (
            <T
              title={title}
              size={16}
              textStyle={[styles.headerTitleStyle, titleStyle]}
            />
          ) : (
            <IonIcon name={icon} size={size} color={color} />
          )}
        </>
      ) : (
        children
      )}
    </Pressable>
  );
};

CustomNavButton.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  onPress: PropTypes.func,
  children: PropTypes.element,
  buttonStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default CustomNavButton;

const styles = StyleSheet.create({
  headerTitleStyle: {textTransform: 'capitalize'},
  //   headerRightContainerStyle: {marginRight: 16},
});
