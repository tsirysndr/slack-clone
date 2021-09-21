import { DocumentNode } from 'apollo-link';
import gql from 'graphql-tag';
import { MESSAGE_FRAGMENT } from '../Message/fragment';
import { USER_FRAGMENT } from '../User/fragment';

export const CHANNEL_FRAGMENT: DocumentNode = gql`
  fragment ChannelFragment on channel {
    id
    name
    creatorId
    creator {
      ...UserFragment
    }
    createdAt
    updatedAt
    messages {
      ...MessageFragment
    }
    isPrivate
  }
  ${USER_FRAGMENT}
  ${MESSAGE_FRAGMENT}
`;
