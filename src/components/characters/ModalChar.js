import * as React from 'react';
import {View, StyleSheet, Image, Text, Modal} from 'react-native';
import Loading from './Loading';
import Icon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';

function ModalChar(props) {
  const {currentCharacter, fetching} = props;
  const {image} = props.currentCharacter;
  return (
    <View style={styles.container}>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}>
        <View style={styles.modal}>
          <Icon
            name="closecircleo"
            size={30}
            color="black"
            onPress={() => props.closeModal()}
            style={{position: 'relative', top: -20, left: 120, zIndex: 1}}
          />
          <Image style={{width: '100%', height: 300}} source={{uri: image}} />
          <Text style={styles.title}> {currentCharacter.name} </Text>
          <Text style={styles.text}>
            {' '}
            Type{' '}
            {currentCharacter.type ? currentCharacter.type : 'No type info'}
          </Text>
          <Text style={styles.text}> Gender {currentCharacter.gender}</Text>
          <Text style={styles.text}> Species {currentCharacter.species}</Text>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 60,
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 300,
  },
  title: {
    color: '#fff',
    marginVertical: 10,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
});

function mapStateToProps(store) {
  return {
    currentCharacter: store.characters.currentCharacter,
    fetching: store.characters.fetching,
  };
}

export default connect(mapStateToProps)(ModalChar);
