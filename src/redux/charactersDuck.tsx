import axios from 'axios';

const URL = 'https://rickandmortyapi.com/api/character/';

//constans

//types
const GET_CHARACTERS = 'GET_CHARACTERS';
const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
const GET_CHARACTERS_ERROR = 'GET_CHARACTERS_ERROR';
const GET_CHARACTERS_DETAILS = 'GET_CHARACTERS_DETAILS';

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

    default:
      return state;
  }
}

//actions
export let getCharactersAction = () => (dispatch, getState) => {
  dispatch({
    type: GET_CHARACTERS,
  });
  return axios
    .get(URL)
    .then((res) => {
      dispatch({
        type: GET_CHARACTERS_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: GET_CHARACTERS_ERROR,
        payload: error.response.message,
      });
    });
};

// export let getCharactersDetails = (url) => async (dispatch) => {
//   return await axios
//     .get(URL)
//     .then((res) => {
//       dispatch({
//         type: GET_CHARACTERS_DETAILS,
//         payload: {
//           image: res.data.image,
//           name: res.data.name,
//           status: res.data.status,
//           species: res.data.species,
//           location: res.data.location,
//         },
//       });
//       console.log('desde log', res.data.results);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

export const getCharactersDetails = (id) => async (dispatch) => {
  try {
    const response = await axios(
      `https://rickandmortyapi.com/api/character/${id}`,
    );

    dispatch({
      type: GET_CHARACTERS_DETAILS,
      payload: {
        // name: response.data.results,
        // alto: response.data.height,
        // ancho: response.data.width,
        // imagen: response.data.sprites.front_default,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
