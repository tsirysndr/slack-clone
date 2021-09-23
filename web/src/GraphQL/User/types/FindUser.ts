/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserStatusEnum } from "./../../../Types/graphql-global-types";

// ====================================================
// GraphQL query operation: FindUser
// ====================================================

export interface FindUser_findUser_channels_creator {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface FindUser_findUser_channels_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface FindUser_findUser_channels_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface FindUser_findUser_channels_messages_channel {
  __typename: "channel";
  id: string;
  name: string;
}

export interface FindUser_findUser_channels_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string | null;
  sender: FindUser_findUser_channels_messages_sender;
  receiver: FindUser_findUser_channels_messages_receiver | null;
  channel: FindUser_findUser_channels_messages_channel | null;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface FindUser_findUser_channels {
  __typename: "channel";
  id: string;
  name: string;
  creatorId: string;
  creator: FindUser_findUser_channels_creator;
  createdAt: any;
  updatedAt: any;
  messages: FindUser_findUser_channels_messages[];
  isPrivate: boolean;
}

export interface FindUser_findUser_sent_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface FindUser_findUser_sent_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface FindUser_findUser_sent_messages_channel {
  __typename: "channel";
  id: string;
  name: string;
}

export interface FindUser_findUser_sent_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string | null;
  sender: FindUser_findUser_sent_messages_sender;
  receiver: FindUser_findUser_sent_messages_receiver | null;
  channel: FindUser_findUser_sent_messages_channel | null;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface FindUser_findUser_received_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface FindUser_findUser_received_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface FindUser_findUser_received_messages_channel {
  __typename: "channel";
  id: string;
  name: string;
}

export interface FindUser_findUser_received_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string | null;
  sender: FindUser_findUser_received_messages_sender;
  receiver: FindUser_findUser_received_messages_receiver | null;
  channel: FindUser_findUser_received_messages_channel | null;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface FindUser_findUser {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  channels: FindUser_findUser_channels[];
  createdAt: any;
  updatedAt: any;
  sent_messages: FindUser_findUser_sent_messages[];
  received_messages: FindUser_findUser_received_messages[];
  status: UserStatusEnum | null;
  token: string | null;
}

export interface FindUser {
  findUser: FindUser_findUser | null;
}

export interface FindUserVariables {
  id: string;
}
