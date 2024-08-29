import React from 'react';
import {StyleSheet, View} from 'react-native';

export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]} />

      <View style={[styles.box, styles.box2]} />

      <View style={[styles.box, styles.box3]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#d1d1d1',

    // // // combinacion de estos 2 solo cambia el orden de los hijos
    // justifyContent: 'flex-end',
    // flexDirection: 'column-reverse',

    // flexDirection: 'row',
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',

    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },

  box: {
    // // with & height se ven afectados x el flexDirection
    width: 100,
    height: 100,

    // flex: 1, // se estira todo lo que pueda
  },

  box1: {
    backgroundColor: '#5856D6',
  },
  box2: {
    backgroundColor: '#FFAD29',
  },
  box3: {
    backgroundColor: '#29AFD6',
  },
});
