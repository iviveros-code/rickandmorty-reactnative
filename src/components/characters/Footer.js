import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

export default function Footer() {
  return (
    <View>
      <Text style={{textAlign: 'center'}}>...Cargando...</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}
