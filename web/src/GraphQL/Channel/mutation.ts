import gql from 'graphql-tag';
import { CHANNEL_FRAGMENT } from './fragment';

export const DO_CREATE_CHANNEL = gql`
  mutation CreateChannel($name: String!, $isPrivate: Boolean) {
    createChannel(name: $name, isPrivate: $isPrivate) {
      ...ChannelFragment
    }
  }
  ${CHANNEL_FRAGMENT}
`;

export const EDIT_CHANNEL = gql`
  mutation EditChannel($id: String!, $name: String!, $isPrivate: Boolean) {
    editChannel(id: $id, name: $name, isPrivate: $isPrivate) {
      ...ChannelFragment
    }
  }
  ${CHANNEL_FRAGMENT}
`;
