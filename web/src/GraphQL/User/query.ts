import gql from 'graphql-tag';
import { USER_FRAGMENT } from './fragment';

export const DO_GET_ALL_USERS = gql`
  query AllUsers {
    allUsers {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;

export const DO_FIND_USER = gql`
  query FindUser($id: String!) {
    findUser(id: $id) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;

