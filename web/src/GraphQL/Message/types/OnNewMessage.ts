/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: OnNewMessage
// ====================================================

export interface OnNewMessage_newMessage {
  __typename: "message";
  id: string;
  content: string;
  createdAt: any;
  channelId: string | null;
  receiverId: string | null;
  senderId: string;
}

export interface OnNewMessage {
  newMessage: OnNewMessage_newMessage | null;
}

export interface OnNewMessageVariables {
  id: string;
}
