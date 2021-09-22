import { FC, useContext } from 'react';
import { UserContext } from '../../Providers/UserProvider';
import styled from 'styled-components';

const Username = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #ffffffa6;
`;

const CurrentUser: FC = () => {
  const { user } = useContext(UserContext);
  return (
    <div
      style={{
        fontWeight: 'bold',
        fontSize: 25,
        padding: 25,
        paddingBottom: 25,
      }}
    >
      <div>
        {user?.firstName} {user?.lastName}
      </div>
      <Username>@{user?.username}</Username>
    </div>
  );
};

export default CurrentUser;
