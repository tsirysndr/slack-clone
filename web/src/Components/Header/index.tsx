import { FC } from 'react';
import { useHistory } from 'react-router';
import { removeAccessToken } from '../../LocalStorage';

const Header: FC = () => {
  const history = useHistory();
  const handleLogout = () => {
    removeAccessToken();
    history.push('/login');
  };
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
      <div style={{ flex: 1, fontWeight: 'bold' }}># aléatoire</div>
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
