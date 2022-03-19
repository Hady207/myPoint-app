import React, {useEffect} from 'react';
import {StyleSheet, Keyboard} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// import {useYup} from '@hooks';
import {LoginForm} from '@components/organisms';
import {Colors, Scale} from '@styles';
import {LoginActions} from './reducer';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const {loginFormSchema} = useYup();

  // FormikInitialValues
  const loginFormikValues = {
    username: '',
    password: '',
  };

  const handleLogin = (values: {username: string; password: string}) => {
    dispatch(LoginActions.requestLogin(values.username, values.password));
  };

  useEffect(() => {
    // Clear the error message before removing the screen
    navigation.addListener('beforeRemove', e => {
      // Prevent default behavior of leaving the screen
      e.preventDefault();
      dispatch(LoginActions.clearErrorMessage());
      navigation.dispatch(e.data.action);
    });
  }, [navigation]);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.contentStyles}
      onPress={Keyboard.dismiss}>
      <Formik
        // validationSchema={loginFormSchema}
        initialValues={loginFormikValues}
        validateOnMount
        onSubmit={handleLogin}>
        <LoginForm />
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  contentStyles: {
    paddingHorizontal: 10,
    paddingTop: 20,
    flexGrow: 1,
    backgroundColor: Colors?.background,
  },
  headerLeftContainerStyle: {marginLeft: 20},
  headerRightContainerStyle: {marginRight: 16},
  headerTitleStyle: {
    textTransform: 'capitalize',
  },
  createAccountButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  linkStyle: {
    // textTransform: 'capitalize',
  },

  orStyle: {textAlign: 'center', marginVertical: Scale?.moderateScale(3)},
  newToUsedoo: {marginRight: 5},

  lowerSection: {
    flex: 1,
    marginTop: 15,
    marginBottom: Scale?.moderateScale(25),
  },

  policySection: {
    width: '100%',
    alignItems: 'center',
  },
});
