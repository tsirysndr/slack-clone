import React, { FC } from 'react';
import MessageView from '../../Components/MessageView';
import Sidebar from '../../Components/Sidebar';

const Home: FC = () => {
  return (
    <div style={{ flexDirection: 'row', height: '100vh', display: 'flex' }}>
      <Sidebar />
      <MessageView />
    </div>
  )
}

export default Home;