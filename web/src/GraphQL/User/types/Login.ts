/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserStatusEnum } from "./../../../Types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login_channels_creator {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface Login_login_channels_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface Login_login_channels_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface Login_login_channels_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: Login_login_channels_messages_sender;
  receiver: Login_login_channels_messages_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface Login_login_channels {
  __typename: "channel";
  id: string;
  name: string;
  creatorId: string;
  creator: Login_login_channels_creator;
  createdAt: any;
  updatedAt: any;
  messages: Login_login_channels_messages[];
  isPrivate: boolean;
}

export interface Login_login_sent_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface Login_login_sent_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface Login_login_sent_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: Login_login_sent_messages_sender;
  receiver: Login_login_sent_messages_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface Login_login_received_messages_sender {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface Login_login_received_messages_receiver {
  __typename: "user";
  id: string;
  email: string;
  username: string;
}

export interface Login_login_received_messages {
  __typename: "message";
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  sender: Login_login_received_messages_sender;
  receiver: Login_login_received_messages_receiver;
  createdAt: any;
  updatedAt: any;
  channelId: string | null;
}

export interface Login_login {
  __typename: "user";
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  channels: Login_login_channels[];
  createdAt: any;
  updatedAt: any;
  sent_messages: Login_login_sent_messages[];
  received_messages: Login_login_received_messages[];
  status: UserStatusEnum | null;
  token: string | null;
}

export interface Login {
  login: Login_login | null;
}

export interface LoginVariables {
  email: string;
  password: string;
}
