/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserStatusEnum } from "./../../../Types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: CreateChannel
// ====================================================

export interface CreateChannel_createChannel_creator_channels_creator {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface CreateChannel_createChannel_creator_channels_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface CreateChannel_createChannel_creator_channels_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface CreateChannel_createChannel_creator_channels_messages_channel {
  __typename: "channel";
  id: string;
  name: string;
}

export interface CreateChannel_createChannel_creator_channels_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string | null;
  sender: CreateChannel_createChannel_creator_channels_messages_sender;
  receiver: CreateChannel_createChannel_creator_channels_messages_receiver | null;
  channel: CreateChannel_createChannel_creator_channels_messages_channel | null;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface CreateChannel_createChannel_creator_channels {
  __typename: "channel";
  id: string;
  name: string;
  creatorId: string;
  creator: CreateChannel_createChannel_creator_channels_creator;
  createdAt: any;
  updatedAt: any;
  messages: CreateChannel_createChannel_creator_channels_messages[];
  isPrivate: boolean;
}

export interface CreateChannel_createChannel_creator_sent_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface CreateChannel_createChannel_creator_sent_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface CreateChannel_createChannel_creator_sent_messages_channel {
  __typename: "channel";
  id: string;
  name: string;
}

export interface CreateChannel_createChannel_creator_sent_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string | null;
  sender: CreateChannel_createChannel_creator_sent_messages_sender;
  receiver: CreateChannel_createChannel_creator_sent_messages_receiver | null;
  channel: CreateChannel_createChannel_creator_sent_messages_channel | null;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface CreateChannel_createChannel_creator_received_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface CreateChannel_createChannel_creator_received_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface CreateChannel_createChannel_creator_received_messages_channel {
  __typename: "channel";
  id: string;
  name: string;
}

export interface CreateChannel_createChannel_creator_received_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string | null;
  sender: CreateChannel_createChannel_creator_received_messages_sender;
  receiver: CreateChannel_createChannel_creator_received_messages_receiver | null;
  channel: CreateChannel_createChannel_creator_received_messages_channel | null;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface CreateChannel_createChannel_creator {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  channels: CreateChannel_createChannel_creator_channels[];
  createdAt: any;
  updatedAt: any;
  sent_messages: CreateChannel_createChannel_creator_sent_messages[];
  received_messages: CreateChannel_createChannel_creator_received_messages[];
  status: UserStatusEnum | null;
  token: string | null;
}

export interface CreateChannel_createChannel_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface CreateChannel_createChannel_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface CreateChannel_createChannel_messages_channel {
  __typename: "channel";
  id: string;
  name: string;
}

export interface CreateChannel_createChannel_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string | null;
  sender: CreateChannel_createChannel_messages_sender;
  receiver: CreateChannel_createChannel_messages_receiver | null;
  channel: CreateChannel_createChannel_messages_channel | null;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface CreateChannel_createChannel {
  __typename: "channel";
  id: string;
  name: string;
  creatorId: string;
  creator: CreateChannel_createChannel_creator;
  createdAt: any;
  updatedAt: any;
  messages: CreateChannel_createChannel_messages[];
  isPrivate: boolean;
}

export interface CreateChannel {
  createChannel: CreateChannel_createChannel | null;
}

export interface CreateChannelVariables {
  name: string;
  isPrivate?: boolean | null;
}
