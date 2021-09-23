import { FC, useContext } from 'react';
import { AllChannels_allChannels } from '../../GraphQL/Channel/types/AllChannels';
import { AllUsers_allUsers } from '../../GraphQL/User/types/AllUsers';
import {
  instanceOfChannel,
  instanceOfUser,
  MessageContext,
} from '../../Providers/MessageProvider';
import { UserContext } from '../../Providers/UserProvider';

const Header: FC = () => {
  const { recipient } = useContext(MessageContext);
  const { handleLogout } = useContext(UserContext);
  return (
    <div
      style={{
        flexDirection: 'row',
        display: 'flex',
        fontSize: 20,
        padding: 20,
        borderBottom: '1px solid #0000001c',
      }}
    >
      {recipient != null && instanceOfUser(recipient) && (
        <div style={{ flex: 1, fontWeight: 'bold' }}>
          {(recipient as AllUsers_allUsers).firstName}{' '}
          {(recipient as AllUsers_allUsers).lastName}
        </div>
      )}
      {recipient != null && instanceOfChannel(recipient) && (
        <div style={{ flex: 1, fontWeight: 'bold' }}>
          {`# `}
          {(recipient as AllChannels_allChannels).name}
        </div>
      )}
      <div
        onClick={handleLogout}
        className="button"
        style={{ fontWeight: 500, paddingRight: 10, cursor: 'pointer' }}
      >
        Logout
      </div>
    </div>
  );
};

export default Header;
