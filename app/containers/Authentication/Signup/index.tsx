import React, {useEffect, useLayoutEffect} from 'react';
import {Keyboard, SafeAreaView, StyleSheet, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-elements';

import {SignupForm} from '@components/organisms';
import {Colors} from '@styles';

import {SignupActions} from './reducer';

const SignupScreen = () => {
  const navigation = useNavigation();
  // const captchaForm = useRef();
  const dispatch = useDispatch();
  // const {signupFormSchema} = useYup();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{marginLeft: 10}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" type="simple-line-icon" color={Colors.textColor} />
        </Pressable>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    // Clear the error message before removing the screen
    navigation.addListener('beforeRemove', e => {
      // Prevent default behavior of leaving the screen
      e.preventDefault();
      dispatch(SignupActions.clearErrorMessage());
      navigation.dispatch(e.data.action);
    });
  }, [navigation]);

  // FormikInitialValues
  const signupFormikValues = {
    username: '',
    password: '',
  };

  const handleSubmit = (value: any) => {
    dispatch(SignupActions.requestSignup(value.username, value.password));
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentStyle}
        onPress={Keyboard.dismiss}>
        <Formik
          validateOnMount
          // validationSchema={signupFormSchema}
          initialValues={signupFormikValues}
          onSubmit={handleSubmit}>
          <SignupForm />
        </Formik>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  contentStyle: {
    backgroundColor: Colors.background,
    paddingTop: 20,
    paddingHorizontal: 10,
    flexGrow: 1,
  },
});
