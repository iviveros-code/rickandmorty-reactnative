import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {gql} from 'apollo-boost';
import {useQuery} from 'react-apollo';
import charsStyles from './styles';
import SearchBar from './SearchBar';
import RenderItem from './RenderItem';
import Footer from './Footer';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  setCurrentCardAction,
  setRequiredDataAction,
  getDataAction,
} from '../../redux/queryDuck';
import {Response} from '../../apollo/types';

interface State {
  filter: string;
  data: Response;
  currentCard: number;
  filterNoCharacters: boolean;
  setCurrentCardAction: {(index: number): any};
  setRequiredDataAction: {(filterNoCharacters: boolean): any};
  getDataAction: {(next: number): any};
}

const CharsComp = ({
  filter,
  data,
  currentCard,
  filterNoCharacters,
  setCurrentCardAction,
  setRequiredDataAction,
  getDataAction,
}: State) => {
  // const [modalVisible, setModalVisible] = useState(false);
  // const [chars, setChars] = useState([]);

  // console.log(chars);
  // let query = gql`
  //   {
  //     characters {
  //       results {
  //         name
  //         image
  //       }
  //       info {
  //         next
  //       }
  //     }
  //   }
  // `;
  // const {data, loading, error} = useQuery(query);

  // useEffect(() => {
  //   if (data && !loading && !error) {
  //     setChars([...data.characters.results]);
  //   }
  // }, [data]);

  // if (loading)
  //   return (
  //     <View>
  //       <Text>Cargando amigo!</Text>
  //       <ActivityIndicator size={'large'} />
  //     </View>
  //   );

  // useEffect(() => {
  //   if (data) setChars([...data.characters.results]);
  // }, [data]);

  const navigation = useNavigation();

  const REQUIRED_DATA = filter === 'locations' ? 'residents' : 'characters';

  const navigate = (i: number) => {
    if (filter !== 'characters') {
      setRequiredDataAction(true);
    }
    setCurrentCardAction(i);
    navigation.navigate('Details');
  };

  const fetchMoreData = (next: number) => {
    getDataAction(next);
  };

  return (
    <View>
      <SearchBar />
      <FlatList
        data={
          !filterNoCharacters
            ? data.results
            : data.results[currentCard][REQUIRED_DATA].slice(0, 5)
        }
        style={!filterNoCharacters && styles.spaceBottom}
        ListFooterComponentStyle={styles.loader}
        onEndReached={() => fetchMoreData(data.info.next)}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          !!data.info.next && (
            <ActivityIndicator color="darkblue" size="large" />
          )
        }
        renderItem={({item, index}) => (
          <TouchableOpacity
            disabled={filterNoCharacters}
            key={item.id}
            onPress={() => navigate(index)}>
            <View style={styles.card}>
              {filter === 'characters' || filterNoCharacters ? (
                <>
                  <Text style={styles.characterTitle}>{item.name}</Text>
                </>
              ) : (
                <View style={styles.box}>
                  <Text>{item.name}</Text>
                  <Text style={styles.text}>
                    {filter === 'locations' ? item.dimension : item.episode}
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

function mapStateToProps(state: State) {
  const filter = state.filter;
  return {
    data: state.data,
    filter: filter,
    currentCard: state.currentCard,
    filterNoCharacters: state.filterNoCharacters,
  };
}

export default connect(mapStateToProps, {
  setCurrentCardAction,
  setRequiredDataAction,
  getDataAction,
})(CharsComp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
