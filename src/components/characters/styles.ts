import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const {width, height} = Dimensions.get('window');

const charsStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  serchContainer: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    borderWidth: 1,
    borderColor: colors.gray,
    width: width - 20,
    height: height - width * 2,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 40,
  },
  cardContainer: {
    width: width,
    height: '90%',
    backgroundColor: colors.lightGray,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: colors.white,
    width: width - 50,
  },
  itemName: {
    marginLeft: 10,
    fontWeight: '300',
    fontSize: 20,
  },
  itemSpecies: {
    marginLeft: 10,
    fontSize: 16,
    color: colors.red,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  textBtn: {
    textAlign: 'center',
    color: colors.red,
    fontSize: 18,
  },
  textInput: {
    fontSize: 20,
    marginLeft: 80,
    textAlign: 'center',
  },
});

export default charsStyles;
