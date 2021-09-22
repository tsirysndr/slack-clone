import { FC, useContext } from 'react';
import { UserContext } from '../../Providers/UserProvider';

const Users: FC = () => {
  const { allUsers } = useContext(UserContext);
  const handleSelectUser = (user: any) => {};
  return (
    <>
      <div style={{ fontWeight: 'bold', fontSize: 16 }}>Direct Messages</div>
      {allUsers?.map((user: any) => (
        <div
          key={user.id}
          onClick={() => handleSelectUser(user)}
          className="link"
          style={{ padding: 5, cursor: 'pointer' }}
        >
          {user.firstName} {user.lastName}
        </div>
      ))}
    </>
  );
};

export default Users;
