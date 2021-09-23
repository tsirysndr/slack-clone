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
  firstName: string | null;
  lastName: string | null;
}

export interface FindMessage_findMessage_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface FindMessage_findMessage_channel {
  __typename: "channel";
  id: string;
  name: string;
}

export interface FindMessage_findMessage {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string | null;
  sender: FindMessage_findMessage_sender;
  receiver: FindMessage_findMessage_receiver | null;
  channel: FindMessage_findMessage_channel | null;
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
