import {gql} from 'apollo-boost';

const queryCharacters = gql`
  query Characters($name: FilterCharacter, $page: Int) {
    characters(filter: $name, page: $page) {
      results {
        id
        name
        type
        gender
        species
        image
      }
      info {
        pages
        next
      }
    }
  }
`;

export default queryCharacters;
