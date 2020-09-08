import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCharactersAction} from '../../redux/charactersDuck';
import charsStyles from './styles';
import SearchBar from './SearchBar';
import RenderItem from './RenderItem';
import Footer from './Footer';

const CharactersComponent = () => {
  const dispatch = useDispatch();
  const charsData = useSelector((store) => store.characters);

  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    dispatch(getCharactersAction());
  }, []);

  const fetchMoreData = (next: number) => {
    getCharactersAction();
  };

  return (
    <View style={charsStyles.container}>
      <SearchBar />
      <Text>Hola</Text>
      <View style={charsStyles.cardContainer}>
        <FlatList
          data={charsData.array}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <RenderItem
              item={item}
              setModalVisible={setModalVisible}
              modalVisible={modalVisible}
            />
          )}
          ListFooterComponent={<Footer />}
          onEndReachedThreshold={0.5}
          onEndReached={() => fetchMoreData()}
        />
      </View>
    </View>
  );
};

export default CharactersComponent;
