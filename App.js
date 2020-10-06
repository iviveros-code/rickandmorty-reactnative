import React from 'react';
import {StackNavigation} from './src/routes';
import {Provider} from 'react-redux';
import generateStore from './src/redux/store';

export default function App() {
  const store = generateStore();

  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
}
