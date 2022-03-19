import React from 'react';
import UserHomeStack from './UserHomeStack';
import AdminHomeStack from './AdminHomeStack';
import {useSelector} from 'react-redux';
import rootSelectors from '@containers/Root/selectors';

// add screen or navigators that shouldn't have bottom bar here
const AppStack = () => {
  const {userProfile} = useSelector(rootSelectors);
  return (
    <>
      {userProfile?.role === 'admin' ? <AdminHomeStack /> : <UserHomeStack />}
    </>
  );
};

export default AppStack;
