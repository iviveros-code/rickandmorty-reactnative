import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCharactersAction,
  getCharactersDetails,
} from '../../redux/charactersDuck';
import charsStyles from './styles';
import SearchBar from './SearchBar';
import ButtonsPagination from './Buttons';
import CharsDetails from './CharsDetails';

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
        <ScrollView style={{marginBottom: 20}}>
          {charsData.map((item) => (
            <View key={item.id} style={charsStyles.card}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                  dispatch(getCharactersDetails());
                }}>
                <Image source={{uri: item.image}} style={charsStyles.image} />
              </TouchableOpacity>
              <Text style={{marginLeft: 10}}>{item.name}</Text>
            </View>
          ))}
          <CharsDetails
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          {/* <ButtonsPagination /> */}
        </ScrollView>
      </View>
    </View>
  );
};

export default CharactersComponent;
