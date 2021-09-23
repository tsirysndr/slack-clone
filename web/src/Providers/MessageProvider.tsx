import { useLazyQuery, useMutation } from '@apollo/client';
import { createContext, FC, useContext, useEffect, useState } from 'react';
import { AllChannels_allChannels } from '../GraphQL/Channel/types/AllChannels';
import { DO_SEND_MESSAGE } from '../GraphQL/Message/mutation';
import { DO_GET_ALL_MESSAGES } from '../GraphQL/Message/query';
import {
  AllMessages,
  AllMessagesVariables,
  AllMessages_allMessages,
} from '../GraphQL/Message/types/AllMessages';
import {
  SendMessage,
  SendMessageVariables,
} from '../GraphQL/Message/types/SendMessage';
import { AllUsers_allUsers } from '../GraphQL/User/types/AllUsers';
import { ChannelContext } from './ChannelProvider';

interface IMessageProvider {
  allMessages?: (AllMessages_allMessages | null)[] | null;
  recipient?: AllUsers_allUsers | AllChannels_allChannels | null;
  selectRecipient: (
    value: AllUsers_allUsers | AllChannels_allChannels | null,
  ) => void;
  sendMessage: (content: string, recipient: string) => Promise<any>;
}

export function instanceOfUser(object: any): object is AllUsers_allUsers {
  return 'email' in object;
}

export function instanceOfChannel(
  object: any,
): object is AllChannels_allChannels {
  return 'name' in object;
}

export const MessageContext = createContext<IMessageProvider>({
  allMessages: null,
  recipient: null,
  selectRecipient: () => {},
  sendMessage: () => Promise.resolve({}),
});

export const MessageProvider: FC = ({ children }) => {
  const [allMessages, setAllMessages] = useState<
    (AllMessages_allMessages | null)[] | null
  >([]);
  const [recipient, setRecipient] = useState<
    AllUsers_allUsers | AllChannels_allChannels | null
  >(null);
  const { allChannels } = useContext(ChannelContext);
  const [
    doGetAllMessages,
    { loading: loadingAllMessages, refetch: refetchMessages },
  ] = useLazyQuery<AllMessages, AllMessagesVariables>(DO_GET_ALL_MESSAGES, {
    onCompleted: (data) => {
      if (data) {
        setAllMessages(data.allMessages);
      }
    },
  });
  const [doSendMessage, { loading: loadingSendMessage }] = useMutation<
    SendMessage,
    SendMessageVariables
  >(DO_SEND_MESSAGE, {
    onCompleted: (data) => {
      refetchMessages &&
        refetchMessages()
          .then((res) => {
            setAllMessages(res.data.allMessages);
          })
          .catch((err) => {
            console.log(err);
          });
    },
    onError: (error) => {},
  });
  useEffect(() => {
    if (recipient === null) {
      allChannels && setRecipient(allChannels[0]);
      return;
    }
    if (instanceOfUser(recipient)) {
      doGetAllMessages({
        variables: {
          receiverId: recipient.id,
        },
      });
    }
    if (instanceOfChannel(recipient)) {
      doGetAllMessages({
        variables: {
          channelId: recipient.id,
        },
      });
    }
  }, [allChannels, recipient]);

  const sendMessage = async (content: string, recipient: string) => {
    await doSendMessage({
      variables: {
        content,
        recipient,
      },
    });
    refetchMessages &&
      refetchMessages()
        .then((res) => setAllMessages(res.data.allMessages))
        .catch((err) => console.log(err));
  };

  return (
    <MessageContext.Provider
      value={{
        allMessages,
        recipient,
        selectRecipient: setRecipient,
        sendMessage,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
