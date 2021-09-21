import gql from 'graphql-tag';
import { MESSAGE_FRAGMENT } from './fragment';

export const DO_SEND_MESSAGE = gql`
  mutation SendMessage($content: String!, $recipient: String!) {
    sendMessage(content: $content, recipient: $recipient) {
      ...MessageFragment
    }
  }
  ${MESSAGE_FRAGMENT}
`;
