/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserStatusEnum } from "./../../../Types/graphql-global-types";

// ====================================================
// GraphQL query operation: FindChannel
// ====================================================

export interface FindChannel_findChannel_creator_channels_creator {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface FindChannel_findChannel_creator_channels_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface FindChannel_findChannel_creator_channels_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface FindChannel_findChannel_creator_channels_messages_channel {
  __typename: "channel";
  id: string;
  name: string;
}

export interface FindChannel_findChannel_creator_channels_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string | null;
  sender: FindChannel_findChannel_creator_channels_messages_sender;
  receiver: FindChannel_findChannel_creator_channels_messages_receiver | null;
  channel: FindChannel_findChannel_creator_channels_messages_channel | null;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface FindChannel_findChannel_creator_channels {
  __typename: "channel";
  id: string;
  name: string;
  creatorId: string;
  creator: FindChannel_findChannel_creator_channels_creator;
  createdAt: any;
  updatedAt: any;
  messages: FindChannel_findChannel_creator_channels_messages[];
  isPrivate: boolean;
}

export interface FindChannel_findChannel_creator_sent_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface FindChannel_findChannel_creator_sent_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface FindChannel_findChannel_creator_sent_messages_channel {
  __typename: "channel";
  id: string;
  name: string;
}

export interface FindChannel_findChannel_creator_sent_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string | null;
  sender: FindChannel_findChannel_creator_sent_messages_sender;
  receiver: FindChannel_findChannel_creator_sent_messages_receiver | null;
  channel: FindChannel_findChannel_creator_sent_messages_channel | null;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface FindChannel_findChannel_creator_received_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface FindChannel_findChannel_creator_received_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface FindChannel_findChannel_creator_received_messages_channel {
  __typename: "channel";
  id: string;
  name: string;
}

export interface FindChannel_findChannel_creator_received_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string | null;
  sender: FindChannel_findChannel_creator_received_messages_sender;
  receiver: FindChannel_findChannel_creator_received_messages_receiver | null;
  channel: FindChannel_findChannel_creator_received_messages_channel | null;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface FindChannel_findChannel_creator {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  channels: FindChannel_findChannel_creator_channels[];
  createdAt: any;
  updatedAt: any;
  sent_messages: FindChannel_findChannel_creator_sent_messages[];
  received_messages: FindChannel_findChannel_creator_received_messages[];
  status: UserStatusEnum | null;
  token: string | null;
}

export interface FindChannel_findChannel_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface FindChannel_findChannel_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface FindChannel_findChannel_messages_channel {
  __typename: "channel";
  id: string;
  name: string;
}

export interface FindChannel_findChannel_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string | null;
  sender: FindChannel_findChannel_messages_sender;
  receiver: FindChannel_findChannel_messages_receiver | null;
  channel: FindChannel_findChannel_messages_channel | null;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface FindChannel_findChannel {
  __typename: "channel";
  id: string;
  name: string;
  creatorId: string;
  creator: FindChannel_findChannel_creator;
  createdAt: any;
  updatedAt: any;
  messages: FindChannel_findChannel_messages[];
  isPrivate: boolean;
}

export interface FindChannel {
  findChannel: FindChannel_findChannel | null;
}

export interface FindChannelVariables {
  id: string;
}
