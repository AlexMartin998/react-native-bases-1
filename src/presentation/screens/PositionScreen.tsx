import React from 'react';
import {StyleSheet, View} from 'react-native';

export type PositionScreenProps = {};

const PositionScreen: React.FC<PositionScreenProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />

      <View style={styles.orangeBox} />
    </View>
  );
};

export default PositionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'relative', // default
    top: -50,
    left: 20,
  },

  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    top: 20,
    left: -20,
  },
});
