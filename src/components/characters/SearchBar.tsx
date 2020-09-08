import * as React from 'react';
import {View, TextInput} from 'react-native';
import charsStyles from './styles';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {setNameAction} from '../../redux/queryDuck';

interface State {
  name: string;
  setNameAction: {(name: string): any};
}

const SearchBar = ({name, setNameAction}: State) => {
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
          value={name}
          onChange={(e) => setNameAction(e.nativeEvent.text)}
        />
      </View>
    </View>
  );
};

function mapStateToProps(state: State) {
  return {
    name: state.name,
  };
}

export default connect(mapStateToProps, {setNameAction})(SearchBar);
