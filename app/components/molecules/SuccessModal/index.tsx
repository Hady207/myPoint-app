import React, {useRef, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import PropTypes from 'prop-types';
import {Colors, Scale} from '@styles/index';
import {T, Modal} from '@components/atoms';
import LottieTick from '@assets/lottie/success.json';
import LottieLoader from '@assets/lottie/loader.json';
import LottieFailed from '@assets/lottie/error.json';

const SuccessModal = ({
  visible,
  visibleFun,
  title,
  failed,
  failedMessage,
  loading,
  successMessage,
  ...props
}) => {
  const animationRef = useRef();

  useEffect(() => {
    if (animationRef?.current) animationRef?.current?.play(55, 120);
  }, [failed]);

  return (
    <Modal isVisible={visible} closing={visibleFun} {...props}>
      <View style={styles.box}>
        <View style={styles.lottieContainer}>
          {loading ? (
            <LottieView
              style={styles.lottieViewStyle}
              source={LottieLoader}
              autoPlay
              // loop
            />
          ) : (
            <>
              {failed ? (
                <LottieView
                  ref={animationRef}
                  style={styles.lottieViewStyle}
                  source={LottieFailed}
                  autoPlay
                />
              ) : (
                <LottieView
                  style={styles.lottieViewStyle}
                  source={LottieTick}
                  autoPlay
                />
              )}
            </>
          )}
        </View>

        <View
          style={{
            marginTop: Scale.moderateScale(15),
          }}>
          {failedMessage ? (
            <T
              textStyle={{textAlign: 'center'}}
              text={failedMessage}
              size={16}
            />
          ) : (
            <T
              textStyle={{textAlign: 'center'}}
              text={loading ? title : successMessage}
              size={16}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

SuccessModal.propTypes = {
  visible: PropTypes.bool,
  visibleFun: PropTypes.func,
  title: PropTypes.string,
  intlType: PropTypes.string,
  failed: PropTypes.bool,
  failedMessages: PropTypes.array,
  loading: PropTypes.bool,
};

export default SuccessModal;

const styles = StyleSheet.create({
  box: {
    backgroundColor: Colors.background,
    borderRadius: 10,
    padding: 20,
  },

  lottieContainer: {alignContent: 'center'},
  lottieViewStyle: {height: 70, width: '100%', alignSelf: 'center'},

  choiceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttons: {
    marginHorizontal: 10,
  },
});
