import React from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
import {Text} from 'react-native-paper';

export type DimensionScreenProps = {};

const DimensionScreen: React.FC<DimensionScreenProps> = () => {
  // dar dimensiones basado en el padre
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.purpleBox,
            width: width * 0.6, // 50% del padre
          }}
        />
      </View>

      <Text style={styles.title}>
        Width: {width}, Height: {height}
      </Text>
    </View>
  );
};

export default DimensionScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // width: '100%',
    width: 300,
    height: 300,
    backgroundColor: 'red',
  },

  purpleBox: {
    backgroundColor: '#5856D6',
    padding: 5,
    height: '50%',
    width: '50%',
  },

  title: {
    fontSize: 21,
    textAlign: 'center',
  },
});
