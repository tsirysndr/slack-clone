import { FC, useContext } from 'react';
import Header from '../Header';
import Message from '../Message';
import { AiOutlineSend } from 'react-icons/ai';
import styled from 'styled-components';
import { MessageContext } from '../../Providers/MessageProvider';

const SendButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 55px;
`;

const MessageView: FC = () => {
  const { allMessages } = useContext(MessageContext);
  const handleSend = () => {};
  return (
    <div style={{ flex: 1 }}>
      <Header />
      <div
        style={{
          overflowY: 'scroll',
          height: 'calc(100vh - (66px + 56px + 25px))',
        }}
      >
        {allMessages?.map((message) => (
          <Message key={message?.id} message={message} />
        ))}
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
          <SendButton onClick={handleSend}>
            <AiOutlineSend size={30} color={'#9c9c9cdc'} />
          </SendButton>
        </div>
      </div>
    </div>
  );
};

export default MessageView;
