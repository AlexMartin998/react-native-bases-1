import React from 'react';
import {StyleSheet, View} from 'react-native';

export type PositionScreenProps = {};

const PositionScreen: React.FC<PositionScreenProps> = () => {
  return (
    <View style={styles.container}>
      {/* se colocan segun las creo en el codigo */}
      <View style={styles.greenBox} />

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
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    // position: 'relative', // default
    // top: -50,
    // left: 20,
    position: 'absolute', // relativo al parent, NO a la pantalla | no empuja a los demas elementos
    bottom: 0, // bottom del parent
  },

  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
  },

  greenBox: {
    // width: 100,
    // height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    // // estirar al maximo del parent
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    // top: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject,
  },
});
