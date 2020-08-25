import React from 'react';
import {Navigation} from './src/navigations';
import {Provider} from 'react-redux';
import generateStore from './src/redux/store';

export default function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
