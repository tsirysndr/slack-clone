import gql from 'graphql-tag';
import { MESSAGE_FRAGMENT } from './fragment';

export const DO_GET_ALL_MESSAGES = gql`
  query AllMessages {
    allMessages {
      ...MessageFragment
    }
  }
  ${MESSAGE_FRAGMENT}
`;

export const DO_FIND_MESSAGE = gql`
  query FindMessage($id: String!) {
    findMessage(id: $id) {
      ...MessageFragment
    }
  }
  ${MESSAGE_FRAGMENT}
`;
