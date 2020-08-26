import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCharactersAction} from '../../redux/charactersDuck';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';

const {width, height} = Dimensions.get('window');

const CharactersComponent = () => {
  const dispatch = useDispatch();
  const charsData = useSelector((store) => store.characters.array);

  useEffect(() => {
    dispatch(getCharactersAction());
  }, []);

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
            style={{
              fontSize: 20,
              marginLeft: 80,
              textAlign: 'center',
            }}
          />
        </View>
      </View>

      <Text>Lista de Personajes</Text>
      <ScrollView style={{marginBottom: 20}}>
        {charsData.map((item) => (
          <View
            key={item.id}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              margin: 10,
              borderWidth: 1,
              borderRadius: 20,
            }}>
            <Image
              source={{uri: item.image}}
              style={{
                width: 100,
                height: 100,
                margin: 10,
                shadowOpacity: 0.5,
                shadowColor: colors.gray,
              }}
            />
            <Text style={{marginLeft: 10}}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={{marginBottom: 10}}>Next Page</Text>
    </View>
  );
};

export default CharactersComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
