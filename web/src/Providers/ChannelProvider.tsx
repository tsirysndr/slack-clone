import {
  ApolloError,
  useLazyQuery,
  useMutation,
  useQuery,
} from '@apollo/client';
import { createContext, FC, useState } from 'react';
import { DO_CREATE_CHANNEL } from '../GraphQL/Channel/mutation';
import { DO_GET_ALL_CHANNELS } from '../GraphQL/Channel/query';
import {
  AllChannels,
  AllChannels_allChannels,
} from '../GraphQL/Channel/types/AllChannels';
import {
  CreateChannel,
  CreateChannelVariables,
} from '../GraphQL/Channel/types/CreateChannel';

interface IChannelProvider {
  allChannels?: (AllChannels_allChannels | null)[] | null;
  createChannel: (
    name: string,
    description: string,
    isPrivate?: boolean | null,
  ) => void;
  refreshChannels: () => void;
}

export const ChannelContext = createContext<IChannelProvider>({
  allChannels: null,
  createChannel: () => {},
  refreshChannels: () => {},
});

export const ChannelProvider: FC = ({ children }) => {
  const [allChannels, setAllChannels] = useState<
    (AllChannels_allChannels | null)[] | null
  >(null);
  const [doCreateChannel, { loading: loadingLogin }] = useMutation<
    CreateChannel,
    CreateChannelVariables
  >(DO_CREATE_CHANNEL, {
    onCompleted: (data) => {
      refreshChannels();
    },
    onError: (error) => {},
  });

  const [refreshChannels, { loading: refreshLoading, data: list}] = useLazyQuery<AllChannels>(DO_GET_ALL_CHANNELS, {
    onCompleted: (data: AllChannels) => {
      if (data && data.allChannels) {
        setAllChannels(data.allChannels);
      }
    },
    onError: (error) => {
      console.log('error');
      console.log(error);
    },
  });

  console.log(refreshLoading, list);

  const { loading: allChannelsLoading, refetch: refetchChannels } = useQuery<AllChannels>(
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

  const createChannel = async (
    name: string,
    description: string,
    isPrivate?: boolean | null,
  ) => {
    await doCreateChannel({
      variables: {
        name,
        isPrivate,
      },
    });
    await refetchChannels();
  };
  return (
    <ChannelContext.Provider
      value={{
        allChannels,
        createChannel,
        refreshChannels,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
};
