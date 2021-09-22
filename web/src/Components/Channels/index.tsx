import { FC } from 'react';

const Channels: FC = () => {
  const handleChangeChannel = (channel: string) => {

  }
  const handleCreateChannel = () => {};
  return (
    <div style={{ marginBottom: 15 }}>
      <div style={{ fontWeight: 'bold', fontSize: 16 }}>Channels</div>
      <div>
        <div onClick={() => handleChangeChannel('id')} className="link" style={{ padding: 5, cursor: 'pointer' }}>
          # aléatoire
        </div>
        <div className="link" style={{ padding: 5, cursor: 'pointer' }}>
          # général
        </div>
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
