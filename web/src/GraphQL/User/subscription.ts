import gql from 'graphql-tag';
import { USER_FRAGMENT } from './fragment';

export const ON_USER_ONLINE = gql`
  subscription OnUserOnline($id: String!) {
    userOnlineStatus(id: $id) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;
