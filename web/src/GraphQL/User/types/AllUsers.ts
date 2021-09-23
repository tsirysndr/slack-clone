/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserStatusEnum } from "./../../../Types/graphql-global-types";

// ====================================================
// GraphQL query operation: AllUsers
// ====================================================

export interface AllUsers_allUsers_channels_creator {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface AllUsers_allUsers_channels_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface AllUsers_allUsers_channels_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface AllUsers_allUsers_channels_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: AllUsers_allUsers_channels_messages_sender;
  receiver: AllUsers_allUsers_channels_messages_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface AllUsers_allUsers_channels {
  __typename: "channel";
  id: string;
  name: string;
  creatorId: string;
  creator: AllUsers_allUsers_channels_creator;
  createdAt: any;
  updatedAt: any;
  messages: AllUsers_allUsers_channels_messages[];
  isPrivate: boolean;
}

export interface AllUsers_allUsers_sent_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface AllUsers_allUsers_sent_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface AllUsers_allUsers_sent_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: AllUsers_allUsers_sent_messages_sender;
  receiver: AllUsers_allUsers_sent_messages_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface AllUsers_allUsers_received_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface AllUsers_allUsers_received_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface AllUsers_allUsers_received_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: AllUsers_allUsers_received_messages_sender;
  receiver: AllUsers_allUsers_received_messages_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface AllUsers_allUsers {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  channels: AllUsers_allUsers_channels[];
  createdAt: any;
  updatedAt: any;
  sent_messages: AllUsers_allUsers_sent_messages[];
  received_messages: AllUsers_allUsers_received_messages[];
  status: UserStatusEnum | null;
  token: string | null;
}

export interface AllUsers {
  allUsers: (AllUsers_allUsers | null)[];
}
