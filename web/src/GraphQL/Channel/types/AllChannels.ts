/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserStatusEnum } from "./../../../Types/graphql-global-types";

// ====================================================
// GraphQL query operation: AllChannels
// ====================================================

export interface AllChannels_allChannels_creator_channels_creator {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface AllChannels_allChannels_creator_channels_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface AllChannels_allChannels_creator_channels_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface AllChannels_allChannels_creator_channels_messages_channel {
  __typename: "channel";
  id: string;
  name: string;
}

export interface AllChannels_allChannels_creator_channels_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string | null;
  sender: AllChannels_allChannels_creator_channels_messages_sender;
  receiver: AllChannels_allChannels_creator_channels_messages_receiver | null;
  channel: AllChannels_allChannels_creator_channels_messages_channel | null;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface AllChannels_allChannels_creator_channels {
  __typename: "channel";
  id: string;
  name: string;
  creatorId: string;
  creator: AllChannels_allChannels_creator_channels_creator;
  createdAt: any;
  updatedAt: any;
  messages: AllChannels_allChannels_creator_channels_messages[];
  isPrivate: boolean;
}

export interface AllChannels_allChannels_creator_sent_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface AllChannels_allChannels_creator_sent_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface AllChannels_allChannels_creator_sent_messages_channel {
  __typename: "channel";
  id: string;
  name: string;
}

export interface AllChannels_allChannels_creator_sent_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string | null;
  sender: AllChannels_allChannels_creator_sent_messages_sender;
  receiver: AllChannels_allChannels_creator_sent_messages_receiver | null;
  channel: AllChannels_allChannels_creator_sent_messages_channel | null;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface AllChannels_allChannels_creator_received_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface AllChannels_allChannels_creator_received_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface AllChannels_allChannels_creator_received_messages_channel {
  __typename: "channel";
  id: string;
  name: string;
}

export interface AllChannels_allChannels_creator_received_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string | null;
  sender: AllChannels_allChannels_creator_received_messages_sender;
  receiver: AllChannels_allChannels_creator_received_messages_receiver | null;
  channel: AllChannels_allChannels_creator_received_messages_channel | null;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface AllChannels_allChannels_creator {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  channels: AllChannels_allChannels_creator_channels[];
  createdAt: any;
  updatedAt: any;
  sent_messages: AllChannels_allChannels_creator_sent_messages[];
  received_messages: AllChannels_allChannels_creator_received_messages[];
  status: UserStatusEnum | null;
  token: string | null;
}

export interface AllChannels_allChannels_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface AllChannels_allChannels_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface AllChannels_allChannels_messages_channel {
  __typename: "channel";
  id: string;
  name: string;
}

export interface AllChannels_allChannels_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string | null;
  sender: AllChannels_allChannels_messages_sender;
  receiver: AllChannels_allChannels_messages_receiver | null;
  channel: AllChannels_allChannels_messages_channel | null;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface AllChannels_allChannels {
  __typename: "channel";
  id: string;
  name: string;
  creatorId: string;
  creator: AllChannels_allChannels_creator;
  createdAt: any;
  updatedAt: any;
  messages: AllChannels_allChannels_messages[];
  isPrivate: boolean;
}

export interface AllChannels {
  allChannels: (AllChannels_allChannels | null)[];
}
