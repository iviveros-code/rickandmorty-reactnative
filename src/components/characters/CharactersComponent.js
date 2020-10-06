import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {
  getCharactersAction,
  loadMoreCharactersAction,
  updateFilterCharacters,
  radioHandlerCharAction,
  getCharacterAction,
  closeModalAction,
  eraseModalInfo,
} from '../../redux/charactersDuck';
import charsStyles from './styles';
import SearchBar from './SearchBar';
import RenderItem from './RenderItem';
import CustomText from './CustomText';
import ModalChar from './ModalChar';
import Loading from './Loading';

const CharactersComponent = ({
  getCharactersAction,
  loadMoreCharactersAction,
  updateFilterCharacters,
  radioHandlerCharAction,
  getCharacterAction,
  eraseModalInfo,
  closeModalAction,
  characters,
  fetching,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
    eraseModalInfo();
  };

  const openModal = (id) => {
    setModalVisible(true);
    getCharacterAction(id);
  };

  return fetching === true ? (
    <Loading textLoading=" Cargando" />
  ) : (
    <View style={[charsStyles.container]}>
      <SearchBar blurOnSubmit onChangeText={updateFilterCharacters} />
      <View style={charsStyles.cardContainer}>
        <ModalChar modalVisible={modalVisible} closeModal={closeModal} />
        <FlatList
          data={characters}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <RenderItem item={item} openModal={openModal} />
          )}
          onEndReachedThreshold={0.5}
          onEndReached={() => loadMoreCharactersAction()}
          ListEmptyComponent={
            <CustomText> No characters with this name</CustomText>
          }
        />
      </View>
    </View>
  );
};

function mapStateToProps(store) {
  return {
    characters: store.characters.characters,
    fetching: store.characters.fetching,
  };
}

export default connect(mapStateToProps, {
  getCharactersAction,
  loadMoreCharactersAction,
  updateFilterCharacters,
  radioHandlerCharAction,
  closeModalAction,
  getCharacterAction,
  eraseModalInfo,
})(CharactersComponent);
