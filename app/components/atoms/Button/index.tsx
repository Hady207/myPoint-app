// import React from 'react';
// import {StyleSheet} from 'react-native';
// import {Button} from 'react-native-elements';

// const MyButton = ({
//   outline,
//   buttonStyle,
//   title,
//   intlType,
//   titleStyle,
//   ...props
// }) => {
//   return (
//     <Button
//       type={outline ? 'outline' : 'solid'}
//       buttonStyle={[
//         styles.button,
//         outline && styles.outlineButton,
//         buttonStyle,
//       ]}
//       title={title}
//       titleStyle={[
//         styles.defaultTitleStyle,
//         {bottom: i18n?.language === 'ar' ? 3.5 : 0},
//         outline && styles.outlineTitleStyle,
//         titleStyle,
//       ]}
//       {...props}
//     />
//   );
// };

// export default MyButton;

// const styles = StyleSheet.create({
//   button: {
//     borderRadius: 5,
//     backgroundColor: Colors.primaryColor,
//     height: Scale.moderateScale(50),
//   },
//   outlineButton: {backgroundColor: null, borderColor: Colors.primaryColor},
//   outlineTitleStyle: {color: Colors.primaryColor},
//   defaultTitleStyle: {
//     ...Typography.style.standardU(),
//     textTransform: 'capitalize',
//   },
// });
