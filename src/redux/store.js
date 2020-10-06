import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import charsReducer, {getCharactersAction} from './charactersDuck';
import episodesReducer, {getEpisodesAction} from './episodesDuck';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  characters: charsReducer,
  episodes: episodesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  let store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );
  getCharactersAction()(store.dispatch, store.getState);
  getEpisodesAction()(store.dispatch, store.getState);

  return store;
}
