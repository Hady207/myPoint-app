import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React, {useEffect} from 'react';

import {Provider} from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {ThemeProvider} from 'react-native-elements';
import {store, persistor} from '@redux/configStore';
import Root from '@containers/Root';

const handleSplash = async () => {
  await RNBootSplash.hide({fade: true});
};

const App = () => {
  useEffect(() => {
    const timer1 = setTimeout(() => handleSplash(), 500);
    return () => {
      clearTimeout(timer1);
    };
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <Root />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
