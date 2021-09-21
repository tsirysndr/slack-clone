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
    }
    receiver {
      id
      email
      username
    }
    createdAt
    updatedAt
    channelId
  }
`;
