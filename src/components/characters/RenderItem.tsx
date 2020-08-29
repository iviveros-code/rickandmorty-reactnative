import * as React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import charsStyles from './styles';

interface RenderItemProps {}

const RenderItem = ({modalVisible, setModalVisible, item}) => {
  return (
    <View style={charsStyles.container}>
      <View key={item.id} style={charsStyles.card}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}>
          <Image source={{uri: item.image}} style={charsStyles.image} />
        </TouchableOpacity>
        <Text style={{marginLeft: 10}}>{item.name}</Text>
      </View>
    </View>
  );
};

export default RenderItem;
