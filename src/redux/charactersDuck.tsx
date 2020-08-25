import axios from 'axios';

const URL = 'https://rickandmortyapi.com/api/character';

//constans

//types
const GET_CHARACTERS = 'GET_CHARACTERS';
const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
const GET_CHARACTERS_ERROR = 'GET_CHARACTERS_ERROR';

const initialData = {
  fetching: false,
  array: [],
  current: {},
  favorites: [],
  nextPage: 1,
};
//reducer

export default function Reducer(state = initialData, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {...state, fetching: true};
    case GET_CHARACTERS_SUCCESS:
      return {...state, array: action.payload, fetching: false};
    case GET_CHARACTERS_ERROR:
      return {...state, fetching: false, error: action.payload};

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
