import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Container, Image, T} from '@components/atoms';

const QRCode = () => {
  return (
    <Container containerStyle={styles.containerStyle}>
      <Image
        style={styles.qrImageStyle}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAOPSURBVO3BO44sSQIDQWeg7n9l3yeMQCmARFb3fJZm8Q9m/nKYKYeZcpgph5lymCmHmXKYKYeZcpgph5lymCmHmXKYKYeZcpgpH15Kwm9SaUloKi0JTaUl4UbljST8JpU3DjPlMFMOM+XDl6l8UxJuVG5UWhKeSEJTaUloKjcq35SEbzrMlMNMOcyUDz8sCU+oPJGEG5UblZaE35SEJ1R+0mGmHGbKYaZ8+JdTaUloSWgqT6j8PznMlMNMOcyUD3OVhKbyX3aYKYeZcpgpH36Yyk9KwhNJuFF5QuUNlX+Sw0w5zJTDTPnwZUn4O6m0JDSVloSbJDSVloSmcpOEf7LDTDnMlMNM+fCSyt9J5YkkvJGEJ1T+TQ4z5TBTDjMl/sELSWgqLQlN5Ykk3Kg8kYRvUnkiCU3lJglNpSWhqbxxmCmHmXKYKfEPflASblTeSEJTeSIJTeUmCU3lJglN5SYJTeU3HWbKYaYcZkr8gxeS0FRaEr5J5SYJNyotCT9JpSXhRqUl4QmVNw4z5TBTDjMl/sEPSkJTaUloKk8koam0JNyotCQ0lSeScKNyk4Sm8psOM+UwUw4z5cOXJaGp3Ki0JLyRhKbSkvBGEm5UWhJukvBGEprKG4eZcpgph5ny4ctUbpLQVG5UnkhCS0JTeSIJTaUl4Q2VloSbJPykw0w5zJTDTPnwUhJuVN5IQlO5UblJQlNpKjdJ+KYkPKHykw4z5TBTDjPlw0sqN0loKi0JTeWJJDSVG5XfpNKS0FTeSEJTeeMwUw4z5TBTPryUhBuVJ5LwhEpLwjepPJGEJ5LQVP5Oh5lymCmHmfLhJZU3VN5IQlN5IglN5UalJaGpPJGEf5LDTDnMlMNM+fBSEn6Tyk0SmsoTSbhReSIJTeUmCTcqTeWbDjPlMFMOM+XDl6l8UxJuVFoSbpJwo3KThCdU3lD5TYeZcpgph5ny4Ycl4QmVN1RuVG6ScKPSktCS8JOScKPyxmGmHGbKYaZ8+I9Jwo3KEyotCU3ljSQ8ofKTDjPlMFMOM+XDv1wSmkpLQktCU2kq35SEpvJGEm5U3jjMlMNMOcyUDz9M5SeptCQ0lSeS0FSayhMqNyotCU+ofNNhphxmymGmfPiyJPymJDyRhDeS8ITKTRLeSEJTeeMwUw4z5TBT4h/M/OUwUw4z5TBTDjPlMFMOM+UwUw4z5TBTDjPlMFMOM+UwUw4z5TBT/gdpwZMMG8OhJgAAAABJRU5ErkJggg==',
        }}
        resizeMode="contain"
      />
      <View>
        <View style={styles.fieldRow}>
          <T text="Appointment location: " size={16} />
          <T text="Golds Gym" size={16} />
        </View>
        <View style={styles.fieldRow}>
          <T text="Time: " size={16} />
          <T text="2:00 PM" size={16} />
        </View>
        <View style={styles.fieldRow}>
          <T text="Date: " size={16} />
          <T text="16/4/2022" size={16} />
        </View>
      </View>
    </Container>
  );
};

export default QRCode;

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  qrImageStyle: {height: 250, width: 250},
  fieldRow: {flexDirection: 'row'},
});
