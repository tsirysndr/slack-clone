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
  firstName: string | null;
  lastName: string | null;
}

export interface AllMessages_allMessages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface AllMessages_allMessages_channel {
  __typename: "channel";
  id: string;
  name: string;
}

export interface AllMessages_allMessages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string | null;
  sender: AllMessages_allMessages_sender;
  receiver: AllMessages_allMessages_receiver | null;
  channel: AllMessages_allMessages_channel | null;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface AllMessages {
  allMessages: (AllMessages_allMessages | null)[];
}

export interface AllMessagesVariables {
  receiverId?: string | null;
  channelId?: string | null;
}
