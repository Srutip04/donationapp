import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNaviagtion from './navigation/MainNavigation';
import { Provider } from 'react-redux';
import store from './redux/Store';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNaviagtion />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
