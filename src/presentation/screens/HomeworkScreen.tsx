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
  },
  box: {
    height: 100,
    borderWidth: 6,
    borderColor: 'white',
  },

  purpleBox: {
    backgroundColor: '#5856D6',
    flex: 2,
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    flex: 2,
  },
  blueBox: {
    backgroundColor: '#29AFD6',
    flex: 4,
  },
});
