import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface LocationsComponentProps {}

const LocationsComponent = (props: LocationsComponentProps) => {
  return (
    <View style={styles.container}>
      <Text>LocationsComponent</Text>
    </View>
  );
};

export default LocationsComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
