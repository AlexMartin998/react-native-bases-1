import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Button} from 'react-native-paper';

export type CounterScreenProps = {};

const CounterScreen: React.FC<CounterScreenProps> = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{counter}</Text>

      {/* ------ custom btn ------- */}
      {/* <PrimaryButton
        btnLabel="Increment"
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
      /> */}

      <Button
        mode="contained"
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}>
        Increment
      </Button>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
});
