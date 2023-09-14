import React from 'react'
import { StatusBar, useColorScheme } from 'react-native';
import RootNavigator from './app/navigation';
import { Provider } from 'react-redux';
import { store } from './app/store';

const App = () => {

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}

export default App;