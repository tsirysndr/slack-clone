import { ApolloProvider } from '@apollo/client';
import React, { FC } from 'react';
import { createClient } from '../apiclient';
import { getAccessToken } from '../LocalStorage';
import { ChannelProvider } from './ChannelProvider';
import { MessageProvider } from './MessageProvider';
import { UserProvider } from './UserProvider';

export const Provider: FC = ({ children }) => {
  const token = getAccessToken();
  const client = createClient(token ?? '');
  return (
    <ApolloProvider client={client}>
      <ChannelProvider>
        <MessageProvider>
          <UserProvider>{children}</UserProvider>
        </MessageProvider>
      </ChannelProvider>
    </ApolloProvider>
  );
};
