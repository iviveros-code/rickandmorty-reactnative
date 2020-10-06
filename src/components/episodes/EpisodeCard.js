import * as React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

function EpisodeCard(name, episode, id, openModal) {
  return (
    <TouchableOpacity
      onPress={() => {
        openModal(id);
      }}
      activeOpacity={0.6}>
      <View style={styles.card}>
        <Text style={styles.text}> {name} </Text>
        <Text style={styles.text}> {episode} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 2,
    paddingHorizontal: 5,
    paddingVertical: 20,
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  text: {
    fontSize: 18,
  },
});

export default EpisodeCard;
