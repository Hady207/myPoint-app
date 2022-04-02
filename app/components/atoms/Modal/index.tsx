import React from 'react';
import Modal from 'react-native-modal';

// Base Modal Component customiesd for app needs
const CustomModal = ({children, closing, bkO = 0.5, ...props}) => (
  <Modal
    backdropOpacity={bkO}
    animationInTiming={400}
    animationOutTiming={400}
    backdropTransitionOutTiming={0}
    swipeDirection={['down', 'left', 'right', 'up']}
    onSwipeComplete={closing}
    onBackdropPress={closing}
    onBackButtonPress={closing}
    {...props}>
    {children}
  </Modal>
);

export default CustomModal;
