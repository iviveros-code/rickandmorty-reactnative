import axios from 'axios';
import ApolloClient, {gql} from 'apollo-boost';

const URL = 'https://rickandmortyapi.com/api/character/';
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
});

//constans

//types
const GET_CHARACTERS = 'GET_CHARACTERS';
const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
const GET_CHARACTERS_ERROR = 'GET_CHARACTERS_ERROR';
const GET_CHARACTERS_DETAILS = 'GET_CHARACTERS_DETAILS';
const UPDATE_PAGE = 'UPDATE_PAGE';

const initialData = {
  fetching: false,
  array: [],
  current: {},
  favorites: [],
  nextPage: 1,
};
//reducer

export default function charsReducer(state = initialData, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {...state, fetching: true};
    case GET_CHARACTERS_SUCCESS:
      return {...state, array: action.payload, fetching: false};
    case GET_CHARACTERS_ERROR:
      return {...state, fetching: false, error: action.payload};
    case GET_CHARACTERS_DETAILS:
      return {...state, charactersDetails: action.payload};
    case UPDATE_PAGE:
      return {...state, nextPage: action.payload, fetching: false};

    default:
      return state;
  }
}

//actions
// export let getCharactersAction = () => (dispatch, getState) => {
//   let {nextPage} = getState().characters;
//   dispatch({
//     type: GET_CHARACTERS,
//   });
//   return axios
//     .get(`https://rickandmortyapi.com/api/character/?page=${nextPage}`)

//     .then((res) => {
//       console.log(res.data.info.next);
//       dispatch({
//         type: GET_CHARACTERS_SUCCESS,
//         payload: res.data.results,
//       });
//       dispatch({
//         type: LOAD_PAGE_SUCCESS,
//         payload: res.data.info.next,
//       });
//     })

//     .catch((error) => {
//       console.log(error);
//       dispatch({
//         type: GET_CHARACTERS_ERROR,
//         payload: error.response.message,
//       });
//       return;
//     });
// };

export let getCharactersAction = () => (dispatch, getState) => {
  let query = gql`
    query($page: Int) {
      characters(page: $page) {
        info {
          pages
          next
          prev
        }
        results {
          name
          image
          status
          species
        }
      }
    }
  `;
  dispatch({
    type: GET_CHARACTERS,
  });
  let {nextPage} = getState().characters;
  return client
    .query({
      query,
      variables: {page: nextPage},
    })
    .then(({data, error}) => {
      if (error) {
        dispatch({
          type: GET_CHARACTERS_ERROR,
          payload: error,
        });
        return;
      }
      dispatch({
        type: GET_CHARACTERS_SUCCESS,
        payload: data.characters.results,
      });
      dispatch({
        type: UPDATE_PAGE,
        payload: data.characters.info.next ? data.characters.info.next : 1,
      });
    });
};

// export const getCharactersDetails = (id) => async (dispatch) => {
//   try {
//     const response = await axios(
//       `https://rickandmortyapi.com/api/character/?id=${id}`,
//     );

//     dispatch({
//       type: GET_CHARACTERS_DETAILS,
//       payload: {
//         name: response.data.results,
//         alto: response.data.height,
//         ancho: response.data.width,
//         imagen: response.data.sprites.front_default,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export let nextPageAction = () => async (dispatch, getState) => {
//   let {nextPage} = getState().characters;
//   console.log(nextPage);

//   dispatch({
//     type: LOAD_PAGE,
//   });
//   return axios
//     .get(`https://rickandmortyapi.com/api/character/?nextPage=${nextPage}`)
//     .then((res) => {
//       dispatch({
//         type: LOAD_PAGE_SUCCESS,
//         payload: res.data.info.next,
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
