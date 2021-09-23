import { FC, useContext } from 'react';
import { AllChannels_allChannels } from '../../GraphQL/Channel/types/AllChannels';
import { ChannelContext } from '../../Providers/ChannelProvider';

const Channels: FC = () => {
  const { allChannels } = useContext(ChannelContext);
  const handleChangeChannel = (channel: AllChannels_allChannels | null) => {};
  const handleCreateChannel = () => {};
  return (
    <div style={{ marginBottom: 15 }}>
      <div style={{ fontWeight: 'bold', fontSize: 16 }}>Channels</div>
      <div>
        {allChannels?.map((channel) => (
          <div
            key={channel?.id}
            onClick={() => handleChangeChannel(channel)}
            className="link"
            style={{ padding: 5, cursor: 'pointer' }}
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
