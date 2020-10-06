import React from 'react';
import {ActivityIndicator, Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const Loading = (props) => {
  const {textLoading} = props;
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {textLoading && <Text style={styles.loadingText}>{textLoading}</Text>}
      <ActivityIndicator size="large" color="black" style={{marginTop: 20}} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingText: {
    fontSize: 30,
  },
});

export default Loading;
