import {StyleSheet} from 'react-native';
import React from 'react';

import {useSelector} from 'react-redux';
import {useFormikContext} from 'formik';
import signupSelectors from '@containers/Authentication/Signup/selectors';

import {Button} from '@components/atoms';
import {FormInput} from '@components/molecules';

const SignupForm = () => {
  const {submitForm, isValid} = useFormikContext();
  const {signupIsLoading, errorMessage} = useSelector(signupSelectors);
  const submitDisabled = !isValid || signupIsLoading;

  return (
    <>
      <FormInput
        fieldName="username"
        keyboardType="email-address"
        placeholder="Username"
      />

      <FormInput fieldName="password" placeholder="Password" />

      <Button
        disabled={submitDisabled}
        onPress={submitForm}
        title="signup"
        loading={signupIsLoading}
      />
    </>
  );
};

export default SignupForm;

const styles = StyleSheet.create({});
