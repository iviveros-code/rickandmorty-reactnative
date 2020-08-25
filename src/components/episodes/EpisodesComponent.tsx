import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface EpisodesComponentsProps {}

const EpisodesComponents = (props: EpisodesComponentsProps) => {
  return (
    <View style={styles.container}>
      <Text>EpisodesComponents</Text>
    </View>
  );
};

export default EpisodesComponents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
