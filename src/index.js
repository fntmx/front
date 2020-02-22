import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/Styles/index.scss';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import App from './App';
import * as serviceWorker from './serviceWorker';

// TODO: This should change depending on whether prod, dev, etc.
const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
