import React from 'react';
import {StyleSheet, View} from 'react-native';

export type FlexScreenProps = {};

const FlexScreen: React.FC<FlexScreenProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />

      <View style={styles.box2} />

      <View style={styles.box3} />
    </View>
  );
};

export default FlexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, // 1:1
    backgroundColor: 'gray',
  },

  // // flex:1 en todos los hijos distribuye equitativamente el espacio
  box1: {
    backgroundColor: '#5856D6',
    flex: 1, // (1 + 2 + 5 = 8) -> 1/8
  },
  box2: {
    backgroundColor: '#FFAD29',
    flex: 2, // 2/8
  },
  box3: {
    backgroundColor: '#29AFD6',
    flex: 5, // 5/8
  },
});
