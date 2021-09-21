/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserStatusEnum } from "./../../../Types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: EditProfile
// ====================================================

export interface EditProfile_editProfile_channels_creator {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface EditProfile_editProfile_channels_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface EditProfile_editProfile_channels_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface EditProfile_editProfile_channels_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: EditProfile_editProfile_channels_messages_sender;
  receiver: EditProfile_editProfile_channels_messages_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface EditProfile_editProfile_channels {
  __typename: "channel";
  id: string;
  name: string;
  creatorId: string;
  creator: EditProfile_editProfile_channels_creator;
  createdAt: any;
  updatedAt: any;
  messages: EditProfile_editProfile_channels_messages[];
  isPrivate: boolean;
}

export interface EditProfile_editProfile_sent_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface EditProfile_editProfile_sent_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface EditProfile_editProfile_sent_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: EditProfile_editProfile_sent_messages_sender;
  receiver: EditProfile_editProfile_sent_messages_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface EditProfile_editProfile_received_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface EditProfile_editProfile_received_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface EditProfile_editProfile_received_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: EditProfile_editProfile_received_messages_sender;
  receiver: EditProfile_editProfile_received_messages_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface EditProfile_editProfile {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  channels: EditProfile_editProfile_channels[];
  createdAt: any;
  updatedAt: any;
  sent_messages: EditProfile_editProfile_sent_messages[];
  received_messages: EditProfile_editProfile_received_messages[];
  status: UserStatusEnum | null;
  token: string | null;
}

export interface EditProfile {
  editProfile: EditProfile_editProfile | null;
}

export interface EditProfileVariables {
  id: string;
  firstName: string;
  lastName: string;
}
