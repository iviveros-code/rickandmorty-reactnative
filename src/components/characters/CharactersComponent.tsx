import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCharactersAction} from '../../redux/charactersDuck';
import RenderItem from './index';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';

const {width, height} = Dimensions.get('window');
// const dispatch = useDispatch();

// const characters = useSelector((store) => store.characters.array);

// useEffect(() => {
//   dispatch(getCharactersAction());
// }, []);

function CharactersComponent() {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 50,
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: colors.gray,
            width: width - 20,
            height: height - width * 2,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            name="search"
            size={30}
            color={colors.lightGray}
            style={{marginLeft: 10}}
          />
          <TextInput
            placeholder="Search a character..."
            style={{fontSize: 20, position: 'absolute', marginLeft: 50}}
          />
        </View>
      </View>

      <Text>Lista de Personajes</Text>
      {/* <View>
        <FlatList
          data={characters}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <RenderItem item={item} />}
        />
      </View> */}
    </View>
  );
}

export default CharactersComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
