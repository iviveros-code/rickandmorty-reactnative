import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function CustomText(props) {
  return (
    <Text style={{...styles.customText, ...props.style}}>{props.children}</Text>
  );
}
const styles = StyleSheet.create({
  customText: {
    fontWeight: '800',
    fontSize: 30,
    textAlign: 'center',
  },
});
