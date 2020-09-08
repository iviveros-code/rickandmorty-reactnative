import React from 'react';
import {Navigation} from './src/navigations';
import {Provider} from 'react-redux';
import generateStore from './src/redux/store';
import ApolloClient, {InMemoryCache} from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

export default function App() {
  const store = generateStore();
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
  });

  function multiply(a, b) {
    a * b;
  }

  console.log(multiply);
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </ApolloProvider>
  );
}
