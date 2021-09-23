/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendMessage
// ====================================================

export interface SendMessage_sendMessage_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface SendMessage_sendMessage_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface SendMessage_sendMessage {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: SendMessage_sendMessage_sender;
  receiver: SendMessage_sendMessage_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface SendMessage {
  sendMessage: SendMessage_sendMessage | null;
}

export interface SendMessageVariables {
  content: string;
  recipient: string;
}
