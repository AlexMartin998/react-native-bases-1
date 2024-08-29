import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export type BoxObjectModelScreenProps = {};

const BoxObjectModelScreen: React.FC<BoxObjectModelScreenProps> = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Box Object Model Screen</Text> */}
      <View style={styles.purpleBox}>
        <Text style={styles.purpleBoxText}>Hello World</Text>
      </View>
    </View>
  );
};

export default BoxObjectModelScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',

    // // box object model
    padding: 15,

    borderWidth: 10,
  },

  purpleBox: {
    height: 40,
    margin: 50,
    // margin: 'auto', // center the box
    backgroundColor: '#5856D6',
    padding: 5,
  },
  purpleBoxText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
