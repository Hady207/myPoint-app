import React, {useState, useEffect} from 'react';
import {StyleSheet, Pressable, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useFormikContext} from 'formik';
import {useNavigation} from '@react-navigation/native';

import {Button} from '@components/atoms';
import {FormInput, ErrorMessage} from '@components/molecules';
import loginSelectors from '@containers/Authentication/Login/selectors';
import {Scale} from '@styles';

const LoginForm = () => {
  const {submitForm, isValid} = useFormikContext();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {loginIsLoading, errorMessage} = useSelector(loginSelectors);

  // const [country, setCountry] = useState(selectedCountry);
  const submitDisabled = !isValid || loginIsLoading;

  return (
    <>
      <FormInput
        fieldName="username"
        keyboardType="email-address"
        placeholder="Username"
      />

      <FormInput fieldName="password" placeholder="Password" />
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <Button
        disabled={submitDisabled}
        onPress={submitForm}
        title="login"
        loading={loginIsLoading}
      />
    </>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  formInputContainer: {width: '70%'},
  formInputStyle: {
    marginBottom: -5,
  },
  errorMessageContainer: {
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },

  textStyle: {
    textTransform: 'capitalize',
  },

  errorTextStyle: {textAlign: 'center'},

  forgetPasswordStyle: {
    alignItems: 'flex-end',
    marginBottom: Scale.moderateScale(10),
  },
});
