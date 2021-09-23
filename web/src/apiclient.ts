import { ApolloClient, createHttpLink, DefaultOptions, InMemoryCache, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { getAccessToken } from './LocalStorage';

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

export const createClient = (token: string | null) => {
  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_API_URL || 'http://localhost:4000',
  });

  const authLink = setContext(async (_, { headers }) => {
    const accessToken = getAccessToken();
    return {
      headers: {
        ...headers,
        authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    };
  });

  const wsLink = new WebSocketLink({
    uri: process.env.REACT_APP_WS_URL || 'ws://localhost4000',
    options: {
      reconnect: true,
      connectionParams: {
        authToken: token || '',
      },
    },
  });

  console.log(`API_URL`, process.env.REACT_APP_API_URL);
  console.log(`WS_URL`, process.env.REACT_APP_WS_URL);
  console.log('***************************');

  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    authLink.concat(httpLink),
  );

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
    defaultOptions,
  });
};
