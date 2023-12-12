import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation/navigation';
import 'react-native-gesture-handler';

const App = (): React.JSX.Element => {

  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;
