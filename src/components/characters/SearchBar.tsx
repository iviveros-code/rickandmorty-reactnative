import * as React from 'react';
import {View, TextInput} from 'react-native';
import charsStyles from './styles';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
interface SearchBarProps {}

const SearchBar = (props: SearchBarProps) => {
  return (
    <View style={charsStyles.searchContainer}>
      <View style={charsStyles.search}>
        <Icon
          name="search"
          size={30}
          color={colors.lightGray}
          style={{marginLeft: 10}}
        />
        <TextInput
          placeholder="Search a character..."
          style={charsStyles.textInput}
        />
      </View>
    </View>
  );
};

export default SearchBar;
