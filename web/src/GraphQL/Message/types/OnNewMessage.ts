/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: OnNewMessage
// ====================================================

export interface OnNewMessage_newMessage_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface OnNewMessage_newMessage_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface OnNewMessage_newMessage_channel {
  __typename: "channel";
  id: string;
  name: string;
}

export interface OnNewMessage_newMessage {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string | null;
  sender: OnNewMessage_newMessage_sender;
  receiver: OnNewMessage_newMessage_receiver | null;
  channel: OnNewMessage_newMessage_channel | null;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface OnNewMessage {
  newMessage: OnNewMessage_newMessage | null;
}

export interface OnNewMessageVariables {
  id: string;
}
