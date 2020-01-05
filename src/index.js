import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import "./Assets/Styles/index.scss";

//TODO: This should change based on the environment
const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache(),
    resolvers: {
        Mutation: {
            toggleAuth: (_root, variables, { cache, getCacheKey }) => {
                //cache.writeData({ variables });
                return null;
            },
        },
    },
});


const AppWrapper = () => {
    return (
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    );
};

ReactDOM.render(<AppWrapper/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
