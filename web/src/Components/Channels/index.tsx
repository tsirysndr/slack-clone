import { FC, useContext } from 'react';
import { AllChannels_allChannels } from '../../GraphQL/Channel/types/AllChannels';
import { ChannelContext } from '../../Providers/ChannelProvider';
import { MessageContext } from '../../Providers/MessageProvider';

const Channels: FC = () => {
  const { allChannels } = useContext(ChannelContext);
  const { selectRecipient, recipient } = useContext(MessageContext);
  const handleCreateChannel = () => {};
  return (
    <div style={{ marginBottom: 15 }}>
      <div style={{ fontWeight: 'bold', fontSize: 16 }}>Channels</div>
      <div>
        {allChannels?.map((channel) => (
          <div
            key={channel?.id}
            onClick={() => selectRecipient(channel)}
            className="link"
            style={{
              padding: 5,
              cursor: 'pointer',
              backgroundColor:
                channel?.id === recipient?.id ? '#fd34d16b' : 'initial',
            }}
          >
            {`# `}
            {channel?.name}
          </div>
        ))}

        <div
          onClick={handleCreateChannel}
          className="link"
          style={{
            fontWeight: 'bold',
            padding: 5,
            cursor: 'pointer' /*backgroundColor: 'rgb(106 55 187)'*/,
          }}
        >
          + Create a new channel
        </div>
      </div>
    </div>
  );
};

export default Channels;
