import React, { FC } from 'react';
import { Button, Input } from '@chakra-ui/react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`

const Login: FC = () => {
  const history = useHistory();
  const handleSignIn = () => {
    history.push('/');
  }
  return (
    <Container>
      <div style={{ fontWeight: 'bold', padding: 25, fontSize: 25 }}>Slack Clone</div>
      <div>
        <Input placeholder="Username" style={{ marginBottom: 10 }} />
        <Input placeholder="Password" type="password" />
        <Button onClick={handleSignIn} style={{ width: '100%', marginTop: 25 }}>Sign In</Button>
      </div>
      <div style={{ marginTop: 15}}>
        Available demo users : (user1, password1) and (user2, password2)
      </div>
    </Container>
  );
};

export default Login;
