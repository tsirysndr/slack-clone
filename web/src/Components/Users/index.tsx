import { FC, useContext } from 'react';
import { MessageContext } from '../../Providers/MessageProvider';
import { UserContext } from '../../Providers/UserProvider';

const Users: FC = () => {
  const { selectRecipient, recipient } = useContext(MessageContext);
  const { allUsers } = useContext(UserContext);
  return (
    <>
      <div style={{ fontWeight: 'bold', fontSize: 16 }}>Direct Messages</div>
      {allUsers?.map((user: any) => (
        <div
          key={user.id}
          onClick={() => selectRecipient(user)}
          className="link"
          style={{
            padding: 5,
            cursor: 'pointer',
            backgroundColor:
              recipient?.id === user.id ? '#fd34d16b' : 'initial',
          }}
        >
          {user.firstName} {user.lastName}
        </div>
      ))}
    </>
  );
};

export default Users;
