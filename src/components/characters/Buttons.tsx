import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import charsStyles from './styles';

interface ButtonsPaginationProps {
  hide;
}

const ButtonsPagination = (hide: ButtonsPaginationProps) => {
  return (
    <View style={charsStyles.btnContainer}>
      <TouchableOpacity
        onPress={() => console.log('boton prev')}
        style={{
          width: 200,
          height: 50,
          justifyContent: 'center',
        }}>
        <Text style={charsStyles.textBtn}>Prev Page </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('boton next')}
        style={{
          backgroundColor: 'pink',
          width: 200,
          height: 50,
          justifyContent: 'center',
        }}>
        <Text style={charsStyles.textBtn}>Next Page </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonsPagination;
