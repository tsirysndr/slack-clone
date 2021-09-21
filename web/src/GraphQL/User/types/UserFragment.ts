/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserStatusEnum } from "./../../../Types/graphql-global-types";

// ====================================================
// GraphQL fragment: UserFragment
// ====================================================

export interface UserFragment_channels_creator {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface UserFragment_channels_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface UserFragment_channels_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface UserFragment_channels_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: UserFragment_channels_messages_sender;
  receiver: UserFragment_channels_messages_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface UserFragment_channels {
  __typename: "channel";
  id: string;
  name: string;
  creatorId: string;
  creator: UserFragment_channels_creator;
  createdAt: any;
  updatedAt: any;
  messages: UserFragment_channels_messages[];
  isPrivate: boolean;
}

export interface UserFragment_sent_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface UserFragment_sent_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface UserFragment_sent_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: UserFragment_sent_messages_sender;
  receiver: UserFragment_sent_messages_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface UserFragment_received_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface UserFragment_received_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface UserFragment_received_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: UserFragment_received_messages_sender;
  receiver: UserFragment_received_messages_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface UserFragment {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  channels: UserFragment_channels[];
  createdAt: any;
  updatedAt: any;
  sent_messages: UserFragment_sent_messages[];
  received_messages: UserFragment_received_messages[];
  status: UserStatusEnum | null;
  token: string | null;
}
