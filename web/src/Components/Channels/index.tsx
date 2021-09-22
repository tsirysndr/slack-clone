import { FC } from 'react';

const Channels: FC = () => {
  return (
    <div style={{ marginBottom: 15 }}>
      <div style={{ fontWeight: 'bold', fontSize: 16 }}>Channels</div>
      <div>
        <div className="link" style={{ padding: 5, cursor: 'pointer' }}>
          # aléatoire
        </div>
        <div className="link" style={{ padding: 5, cursor: 'pointer' }}>
          # général
        </div>
      </div>
    </div>
  );
};

export default Channels;
