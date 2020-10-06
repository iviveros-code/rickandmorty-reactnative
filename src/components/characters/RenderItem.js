import * as React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import charsStyles from './styles';
import colors from '../../styles/colors';

function RenderItem({item, openModal}) {
  return (
    <View style={[charsStyles.container, {marginBottom: 20}]}>
      <TouchableOpacity
        onPress={() => {
          openModal(item.id);
        }}
        activeOpacity={0.6}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            backgroundColor: '#FFFFFF',
            height: 120,
            width: 350,
            flexDirection: 'column',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}>
          <Image style={charsStyles.image} source={{uri: item.image}} />
          <Text
            style={[
              charsStyles.text,
              {fontSize: 25, fontWeight: '400', marginLeft: 10},
            ]}>
            {item.name}{' '}
          </Text>
          <Text
            style={[
              charsStyles.text,
              {fontSize: 18, textAlign: 'left', marginLeft: 10, color: 'green'},
            ]}>
            {item.species}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default RenderItem;
