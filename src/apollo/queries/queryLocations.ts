import {gql} from 'apollo-boost';

const queryLocations = gql`
  query($name: FilterLocation, $page: Int) {
    locations(filter: $name, page: $page) {
      results {
        id
        name
        type
        dimension
        residents {
          name
          image
          id
        }
      }
      info {
        pages
        next
      }
    }
  }
`;

export default queryLocations;
