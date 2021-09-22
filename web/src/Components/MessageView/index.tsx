import { FC } from 'react';
import Header from '../Header';
import Message from '../Message';

const MessageView: FC = () => {
  return (
    <div style={{ flex: 1 }}>
      <Header />
      <div
        style={{
          overflowY: 'scroll',
          height: 'calc(100vh - (66px + 56px + 25px))',
        }}
      >
        <Message />
        <div style={{ padding: 15, fontWeight: 500 }}>
          <div style={{ fontWeight: 'bold' }}>Koto</div>
          <div style={{ padding: 5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <input
            style={{
              fontSize: 18,
              paddingLeft: 25,
              paddingRight: 25,
              height: 50,
              width: '90%',
              marginLeft: 10,
              marginRight: 10,
            }}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default MessageView;
