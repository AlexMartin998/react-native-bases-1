import React from 'react';
import {StyleSheet, View} from 'react-native';

import CounterScreenM3 from './CounterScreenM3';

interface HelloWorldScreenProps {
  name?: string;
}

const HelloWorldScreen = ({name = 'World'}: HelloWorldScreenProps) => {
  console.log('HelloWorldScreen:', name);

  return (
    <View style={styles.container}>
      {/* <Text
        // coloca tail (...) cuando no alcanza
        numberOfLines={1}
        style={styles.title}>
        Hello, {name} Screen!
      </Text> */}

      {/* <CounterScreen /> */}
      <CounterScreenM3 />
    </View>
  );
};

export default HelloWorldScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'black',
    padding: 20,
  },
});
