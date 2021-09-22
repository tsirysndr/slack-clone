import { FC } from 'react';
import Channels from '../Channels';
import CurrentUser from '../CurrentUser';
import Users from '../Users';

const Sidebar: FC = () => {
  return (
    <div
      style={{
        padding: 15,
        flex: 0.4,
        minWidth: 250,
        backgroundColor: '#713cc5',
        color: '#fff',
        fontWeight: 500,
      }}
    >
      <CurrentUser />
      <Channels />
      <Users />
    </div>
  );
};

export default Sidebar;
