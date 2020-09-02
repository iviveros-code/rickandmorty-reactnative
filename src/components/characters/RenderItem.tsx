import * as React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import charsStyles from './styles';
import colors from '../../styles/colors';
import CharsDetails from './CharsDetails';
import {useDispatch, useSelector} from 'react-redux';
import {getCharactersDetails} from '../../redux/charactersDuck';

interface RenderItemProps {}

const RenderItem = ({modalVisible, setModalVisible, item}) => {
  // const dispatch = useDispatch()
  // const data = useSelector((store) => store.characters.array);

  // React.useEffect(() => {
  //   dispatch(getCharactersDetails());
  // }, []);
  return (
    <View style={charsStyles.container}>
      <View key={item.id} style={charsStyles.card}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}>
          <Image source={{uri: item.image}} style={charsStyles.image} />
        </TouchableOpacity>
        <View style={{flexDirection: 'column'}}>
          <Text style={charsStyles.itemName}>{item.name}</Text>
          <Text style={charsStyles.itemSpecies}>{item.species}</Text>
          <Text style={{marginLeft: 10}}>{item.status}</Text>
        </View>
      </View>
      <CharsDetails
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        item={item}
      />
    </View>
  );
};

export default RenderItem;
