/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserStatusEnum } from "./../../../Types/graphql-global-types";

// ====================================================
// GraphQL subscription operation: OnUserOnline
// ====================================================

export interface OnUserOnline_userOnlineStatus_channels_creator {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface OnUserOnline_userOnlineStatus_channels_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface OnUserOnline_userOnlineStatus_channels_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface OnUserOnline_userOnlineStatus_channels_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: OnUserOnline_userOnlineStatus_channels_messages_sender;
  receiver: OnUserOnline_userOnlineStatus_channels_messages_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface OnUserOnline_userOnlineStatus_channels {
  __typename: "channel";
  id: string;
  name: string;
  creatorId: string;
  creator: OnUserOnline_userOnlineStatus_channels_creator;
  createdAt: any;
  updatedAt: any;
  messages: OnUserOnline_userOnlineStatus_channels_messages[];
  isPrivate: boolean;
}

export interface OnUserOnline_userOnlineStatus_sent_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface OnUserOnline_userOnlineStatus_sent_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface OnUserOnline_userOnlineStatus_sent_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: OnUserOnline_userOnlineStatus_sent_messages_sender;
  receiver: OnUserOnline_userOnlineStatus_sent_messages_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface OnUserOnline_userOnlineStatus_received_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface OnUserOnline_userOnlineStatus_received_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface OnUserOnline_userOnlineStatus_received_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: OnUserOnline_userOnlineStatus_received_messages_sender;
  receiver: OnUserOnline_userOnlineStatus_received_messages_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface OnUserOnline_userOnlineStatus {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  channels: OnUserOnline_userOnlineStatus_channels[];
  createdAt: any;
  updatedAt: any;
  sent_messages: OnUserOnline_userOnlineStatus_sent_messages[];
  received_messages: OnUserOnline_userOnlineStatus_received_messages[];
  status: UserStatusEnum | null;
  token: string | null;
}

export interface OnUserOnline {
  userOnlineStatus: OnUserOnline_userOnlineStatus | null;
}

export interface OnUserOnlineVariables {
  id: string;
}
