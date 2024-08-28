/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Platform, Pressable, StyleSheet, Text} from 'react-native';

export type PrimaryButtonProps = {
  btnLabel: string;
  onPress: () => void;
  onLongPress?: () => void;
};

const PrimaryButton = ({
  onPress,
  onLongPress,
  btnLabel,
}: PrimaryButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={() => {
        onLongPress && onLongPress();
      }}
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}>
      <Text
        style={{
          color: Platform.OS === 'android' ? 'white' : '#4746AB',
        }}>
        {btnLabel}
      </Text>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
  button: {
    backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#2C2B8D' : 'white',
  },
});
