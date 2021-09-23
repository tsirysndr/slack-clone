import { ApolloError, useQuery } from '@apollo/client';
import { createContext, FC, useState } from 'react';
import { DO_GET_ALL_CHANNELS } from '../GraphQL/Channel/query';
import {
  AllChannels,
  AllChannels_allChannels,
} from '../GraphQL/Channel/types/AllChannels';

interface IChannelProvider {
  allChannels?: (AllChannels_allChannels | null)[] | null;
}

export const ChannelContext = createContext<IChannelProvider>({
  allChannels: null,
});

export const ChannelProvider: FC = ({ children }) => {
  const [allChannels, setAllChannels] = useState<
    (AllChannels_allChannels | null)[] | null
  >(null);
  const { loading: allChannelsLoading } = useQuery<AllChannels>(
    DO_GET_ALL_CHANNELS,
    {
      onCompleted: (data: AllChannels) => {
        if (data && data.allChannels) {
          setAllChannels(data.allChannels);
        }
      },
      onError: (error: ApolloError) => {},
    },
  );
  return (
    <ChannelContext.Provider
      value={{
        allChannels,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
};
