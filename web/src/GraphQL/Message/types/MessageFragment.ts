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
  firstName: string | null;
  lastName: string | null;
}

export interface MessageFragment_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface MessageFragment_channel {
  __typename: "channel";
  id: string;
  name: string;
}

export interface MessageFragment {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string | null;
  sender: MessageFragment_sender;
  receiver: MessageFragment_receiver | null;
  channel: MessageFragment_channel | null;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}
