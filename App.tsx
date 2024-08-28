import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import HelloWorldScreen from './src/presentation/screens/HelloWorldScreen';

export type AppProps = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App: React.FC<AppProps> = () => {
  return (
    // safe area view is used to avoid the status bar and the notch
    <SafeAreaView style={styles.container}>
      <HelloWorldScreen name="Alex" />
    </SafeAreaView>
  );
};

export default App;
