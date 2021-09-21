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
}

export interface OnNewMessage_newMessage_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface OnNewMessage_newMessage {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: OnNewMessage_newMessage_sender;
  receiver: OnNewMessage_newMessage_receiver;
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
