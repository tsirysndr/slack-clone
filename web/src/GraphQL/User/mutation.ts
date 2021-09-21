import gql from 'graphql-tag';
import { USER_FRAGMENT } from './fragment';

export const DO_LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;

export const EDIT_PROFILE = gql`
  mutation EditProfile($id: String!, $firstName: String!, $lastName: String!) {
    editProfile(id: $id, firstName: $firstName, lastName: $lastName) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;