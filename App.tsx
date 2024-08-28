import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {PaperProvider} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';

import HelloWorldScreen from './src/presentation/screens/HelloWorldScreen';

export type AppProps = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App: React.FC<AppProps> = () => {
  return (
    // ui library for react native
    <PaperProvider
      settings={{
        // eslint-disable-next-line react/no-unstable-nested-components
        icon: props => <IonIcon {...props} />,
      }}>
      {/* safe area view is used to avoid the status bar and the notch */}
      <SafeAreaView style={styles.container}>
        <HelloWorldScreen name="Alex" />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
