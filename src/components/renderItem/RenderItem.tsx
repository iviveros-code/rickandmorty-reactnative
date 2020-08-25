import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const RenderItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  container: {},
});
