/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserStatusEnum } from "./../../../Types/graphql-global-types";

// ====================================================
// GraphQL fragment: ChannelFragment
// ====================================================

export interface ChannelFragment_creator_channels_creator {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface ChannelFragment_creator_channels_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface ChannelFragment_creator_channels_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface ChannelFragment_creator_channels_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: ChannelFragment_creator_channels_messages_sender;
  receiver: ChannelFragment_creator_channels_messages_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface ChannelFragment_creator_channels {
  __typename: "channel";
  id: string;
  name: string;
  creatorId: string;
  creator: ChannelFragment_creator_channels_creator;
  createdAt: any;
  updatedAt: any;
  messages: ChannelFragment_creator_channels_messages[];
  isPrivate: boolean;
}

export interface ChannelFragment_creator_sent_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface ChannelFragment_creator_sent_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface ChannelFragment_creator_sent_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: ChannelFragment_creator_sent_messages_sender;
  receiver: ChannelFragment_creator_sent_messages_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface ChannelFragment_creator_received_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface ChannelFragment_creator_received_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface ChannelFragment_creator_received_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: ChannelFragment_creator_received_messages_sender;
  receiver: ChannelFragment_creator_received_messages_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface ChannelFragment_creator {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  channels: ChannelFragment_creator_channels[];
  createdAt: any;
  updatedAt: any;
  sent_messages: ChannelFragment_creator_sent_messages[];
  received_messages: ChannelFragment_creator_received_messages[];
  status: UserStatusEnum | null;
  token: string | null;
}

export interface ChannelFragment_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface ChannelFragment_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface ChannelFragment_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: ChannelFragment_messages_sender;
  receiver: ChannelFragment_messages_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface ChannelFragment {
  __typename: "channel";
  id: string;
  name: string;
  creatorId: string;
  creator: ChannelFragment_creator;
  createdAt: any;
  updatedAt: any;
  messages: ChannelFragment_messages[];
  isPrivate: boolean;
}
