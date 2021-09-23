import { DocumentNode } from 'apollo-link';
import gql from 'graphql-tag';

export const MESSAGE_FRAGMENT: DocumentNode = gql`
  fragment MessageFragment on message {
    id
    content
    senderId
    receiverId
    sender {
      id
      email
      username
      firstName
      lastName
    }
    receiver {
      id
      email
      username
      firstName
      lastName
    }
    channel {
      id
      name
    }
    createdAt
    updatedAt
    channelId
  }
`;
