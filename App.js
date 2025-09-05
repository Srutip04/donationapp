import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNaviagtion from './navigation/MainNavigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/Store';
import store from './redux/Store';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainNaviagtion />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
