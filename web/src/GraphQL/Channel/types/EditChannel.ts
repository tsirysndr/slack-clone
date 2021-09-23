/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserStatusEnum } from "./../../../Types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: EditChannel
// ====================================================

export interface EditChannel_editChannel_creator_channels_creator {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface EditChannel_editChannel_creator_channels_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface EditChannel_editChannel_creator_channels_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface EditChannel_editChannel_creator_channels_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: EditChannel_editChannel_creator_channels_messages_sender;
  receiver: EditChannel_editChannel_creator_channels_messages_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface EditChannel_editChannel_creator_channels {
  __typename: "channel";
  id: string;
  name: string;
  creatorId: string;
  creator: EditChannel_editChannel_creator_channels_creator;
  createdAt: any;
  updatedAt: any;
  messages: EditChannel_editChannel_creator_channels_messages[];
  isPrivate: boolean;
}

export interface EditChannel_editChannel_creator_sent_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface EditChannel_editChannel_creator_sent_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface EditChannel_editChannel_creator_sent_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: EditChannel_editChannel_creator_sent_messages_sender;
  receiver: EditChannel_editChannel_creator_sent_messages_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface EditChannel_editChannel_creator_received_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface EditChannel_editChannel_creator_received_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface EditChannel_editChannel_creator_received_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: EditChannel_editChannel_creator_received_messages_sender;
  receiver: EditChannel_editChannel_creator_received_messages_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface EditChannel_editChannel_creator {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  channels: EditChannel_editChannel_creator_channels[];
  createdAt: any;
  updatedAt: any;
  sent_messages: EditChannel_editChannel_creator_sent_messages[];
  received_messages: EditChannel_editChannel_creator_received_messages[];
  status: UserStatusEnum | null;
  token: string | null;
}

export interface EditChannel_editChannel_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface EditChannel_editChannel_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
}

export interface EditChannel_editChannel_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: EditChannel_editChannel_messages_sender;
  receiver: EditChannel_editChannel_messages_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface EditChannel_editChannel {
  __typename: "channel";
  id: string;
  name: string;
  creatorId: string;
  creator: EditChannel_editChannel_creator;
  createdAt: any;
  updatedAt: any;
  messages: EditChannel_editChannel_messages[];
  isPrivate: boolean;
}

export interface EditChannel {
  editChannel: EditChannel_editChannel | null;
}

export interface EditChannelVariables {
  id: string;
  name: string;
  isPrivate?: boolean | null;
}
