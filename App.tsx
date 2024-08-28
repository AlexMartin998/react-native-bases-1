import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import HelloWorldScreen from './src/presentation/screens/HelloWorldScreen';
import {PaperProvider} from 'react-native-paper';

export type AppProps = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App: React.FC<AppProps> = () => {
  return (
    // ui library for react native
    <PaperProvider>
      {/* safe area view is used to avoid the status bar and the notch */}
      <SafeAreaView style={styles.container}>
        <HelloWorldScreen name="Alex" />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
