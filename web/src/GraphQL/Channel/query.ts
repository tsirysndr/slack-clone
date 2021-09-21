import gql from 'graphql-tag';
import { CHANNEL_FRAGMENT } from './fragment';

export const DO_GET_ALL_CHANNELS = gql`
  query AllChannels {
    allChannels {
      ...ChannelFragment
    }
  }
  ${CHANNEL_FRAGMENT}
`;


export const DO_FIND_CHANNEL = gql`
  query FindChannel($id: String!) {
    findChannel(id: $id) {
      ...ChannelFragment
    }
  }
  ${CHANNEL_FRAGMENT}
`;
