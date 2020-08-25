import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const RenderItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text>RenderItem</Text>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  container: {},
});
