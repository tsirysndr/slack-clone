/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindMessage
// ====================================================

export interface FindMessage_findMessage_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface FindMessage_findMessage_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface FindMessage_findMessage {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: FindMessage_findMessage_sender;
  receiver: FindMessage_findMessage_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface FindMessage {
  findMessage: FindMessage_findMessage | null;
}

export interface FindMessageVariables {
  id: string;
}
