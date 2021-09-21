/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllMessages
// ====================================================

export interface AllMessages_allMessages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface AllMessages_allMessages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface AllMessages_allMessages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: AllMessages_allMessages_sender;
  receiver: AllMessages_allMessages_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface AllMessages {
  allMessages: (AllMessages_allMessages | null)[];
}
