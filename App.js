import React, {use, useEffect, useRef}  from 'react';
import {AppState} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/Store';
import store from './redux/Store';
import RootNavigation from './navigation/RootNavigation';
import { checkToken } from './api/user';
const App = () => {
  
  const appState = useRef(AppState.currentState);

  useEffect(() =>{
    const subscription = AppState.addEventListener('change',
      async nextAppState =>{
        if(appState.current.match(/inactive|background/) && nextAppState === 'active'){
          console.log('You have come back into the app');
          await checkToken();
        }
        appState.current = nextAppState;
      }
    )
    checkToken();
    console.log('Application has rendered');
  },[])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
