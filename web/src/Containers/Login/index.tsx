import { FC, useContext, useState } from 'react';
import { Button, Input } from '@chakra-ui/react';
import styled from 'styled-components';
import { UserContext } from '../../Providers/UserProvider';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

const Login: FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { handleSignIn, errorMsg } = useContext(UserContext);

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      handleSignIn(username, password);
    }
  };

  return (
    <Container>
      <div style={{ fontWeight: 'bold', padding: 25, fontSize: 25 }}>
        Slack Clone
      </div>
      <div>
        {errorMsg !== null && (
          <div style={{ color: 'red', textAlign: 'center', marginBottom: 5 }}>
            {errorMsg}
          </div>
        )}
        <Input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          style={{ marginBottom: 10 }}
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          onKeyPress={handleKeyPress}
        />
        <Button
          onClick={() => handleSignIn(username, password)}
          style={{ width: '100%', marginTop: 25 }}
        >
          Sign In
        </Button>
      </div>
      <div style={{ marginTop: 15 }}>
        Available demo users : (user1, password1), (user2, password2) and
        (user3, password3)
      </div>
    </Container>
  );
};

export default Login;
