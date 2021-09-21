import gql from 'graphql-tag';
import { MESSAGE_FRAGMENT } from './fragment';

export const ON_NEW_MESSAGE = gql`
  subscription OnNewMessage($id: String!) {
    newMessage(id: $id) {
      ...MessageFragment
    }
  }
  ${MESSAGE_FRAGMENT}
`;
