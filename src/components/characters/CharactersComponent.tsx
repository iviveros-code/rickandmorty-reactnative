import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCharactersAction,
  getCharactersDetails,
} from '../../redux/charactersDuck';
import charsStyles from './styles';
import SearchBar from './SearchBar';
import ButtonsPagination from './Buttons';
import CharsDetails from './CharsDetails';
import RenderItem from './RenderItem';

const CharactersComponent = () => {
  const dispatch = useDispatch();
  const charsData = useSelector((store) => store.characters.array);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    dispatch(getCharactersAction());
  }, []);

  return (
    <View style={charsStyles.container}>
      <SearchBar />
      <View style={charsStyles.cardContainer}>
        <FlatList
          data={charsData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <RenderItem
              item={item}
              setModalVisible={setModalVisible}
              modalVisible={modalVisible}
            />
          )}
        />
      </View>
    </View>
  );
};

export default CharactersComponent;
