import { createContext, FC, useContext, useEffect, useState } from 'react';
import { AllChannels_allChannels } from '../GraphQL/Channel/types/AllChannels';
import { AllUsers_allUsers } from '../GraphQL/User/types/AllUsers';
import { ChannelContext } from './ChannelProvider';

interface IMessageProvider {
  recipient?: AllUsers_allUsers | AllChannels_allChannels | null;
  selectRecipient: (
    value: AllUsers_allUsers | AllChannels_allChannels | null,
  ) => void;
}

export function instanceOfUser(object: any): object is AllUsers_allUsers {
  return 'email' in object;
}

export function instanceOfChannel(object: any): object is AllChannels_allChannels {
  return 'name' in object;
}

export const MessageContext = createContext<IMessageProvider>({
  recipient: null,
  selectRecipient: () => {},
});

export const MessageProvider: FC = ({ children }) => {
  const [recipient, setRecipient] = useState<
    AllUsers_allUsers | AllChannels_allChannels | null
  >(null);
  const {allChannels} = useContext(ChannelContext);
  useEffect(() => {
    if (recipient === null) {
      allChannels && setRecipient(allChannels[0]);
    }
  },  [allChannels, recipient])
  return (
    <MessageContext.Provider value={{
      recipient,
      selectRecipient: setRecipient,
    }}>{children}</MessageContext.Provider>
  );
};
