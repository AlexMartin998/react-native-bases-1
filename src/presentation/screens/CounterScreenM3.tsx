import React from 'react';
import {Text, View} from 'react-native';
import {FAB} from 'react-native-paper';

// icons

import {APP_STYLES} from '../theme';

export type CounterScreenM3Props = {};

const CounterScreenM3: React.FC<CounterScreenM3Props> = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <View style={APP_STYLES.centerContainer}>
      <Text style={APP_STYLES.title}>{counter}</Text>

      {/* <Icon name="airplane-outline" size={25} /> */}

      <FAB
        icon="add"
        style={APP_STYLES.fab}
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
      />
    </View>
  );
};

export default CounterScreenM3;
