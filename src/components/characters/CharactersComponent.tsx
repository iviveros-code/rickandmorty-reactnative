import * as React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import RenderItem from './index';

const CharactersComponent = () => {
  return (
    <View style={styles.container}>
      <Text>CharactersComponent hola</Text>
      {/* <FlatList
        data={chars}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <RenderItem item={item} />}
      /> */}
    </View>
  );
};

// function mapStateToProps(state) {
//   return {
//     chars: state.characters.array,
//   };
// }
export default CharactersComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
