import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, gql, InMemoryCache } from '@apollo/client';

import App from './App';

dotenv.config();

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URI,
  cache: new InMemoryCache(),
});

const query = gql`
  {
    totalUsers
    totalPhotos
  }
`;

console.log({ cache: client.extract() });
client
  .query({ query })
  .then(() => console.log({ cache: client.extract() }))
  .catch((e) => console.error(e));

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
