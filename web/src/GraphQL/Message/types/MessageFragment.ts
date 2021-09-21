/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MessageFragment
// ====================================================

export interface MessageFragment_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface MessageFragment_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface MessageFragment {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: MessageFragment_sender;
  receiver: MessageFragment_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}
