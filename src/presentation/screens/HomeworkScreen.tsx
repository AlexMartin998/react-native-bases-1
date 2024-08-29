import React from 'react';
import {StyleSheet, View} from 'react-native';

export type HomeworkScreenProps = {};

const HomeworkScreen: React.FC<HomeworkScreenProps> = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />

      <View style={[styles.box, styles.orangeBox]} />

      <View style={[styles.box, styles.blueBox]} />
    </View>
  );
};

export default HomeworkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 6,
    borderColor: 'white',
  },

  purpleBox: {
    backgroundColor: '#5856D6',
    bottom: -100,
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    right: -100,
  },
  blueBox: {
    backgroundColor: '#29AFD6',
  },
});
