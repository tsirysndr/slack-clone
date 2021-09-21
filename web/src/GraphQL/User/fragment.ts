import { DocumentNode } from 'apollo-link';
import gql from 'graphql-tag';
import { MESSAGE_FRAGMENT } from '../Message/fragment';

export const USER_FRAGMENT: DocumentNode= gql`
  fragment UserFragment on user {
    id
    email
    username
    firstName
    lastName
    channels {
      id
      name
      creatorId
      creator {
        id
        email
        username
      }
      createdAt
      updatedAt
      messages {
        ...MessageFragment
      }
      isPrivate
    }
    createdAt
    updatedAt
    sent_messages {
      ...MessageFragment
    }
    received_messages {
      ...MessageFragment
    }
    status
    token
  }
  ${MESSAGE_FRAGMENT}
`;
