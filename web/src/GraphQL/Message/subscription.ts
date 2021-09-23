import gql from 'graphql-tag';

export const ON_NEW_MESSAGE = gql`
  subscription OnNewMessage($id: String!) {
    newMessage(id: $id) {
      id
      content
      createdAt
      channelId
      receiverId
      senderId
    }
  }
`;
