import { FC, useContext, useEffect, useRef, useState } from 'react';
import Header from '../Header';
import Message from '../Message';
import { AiOutlineSend } from 'react-icons/ai';
import styled from 'styled-components';
import { MessageContext } from '../../Providers/MessageProvider';
import { ON_NEW_MESSAGE } from '../../GraphQL/Message/subscription';
import {
  ApolloClient,
  NormalizedCacheObject,
  useApolloClient,
  useSubscription,
} from '@apollo/client';

const SendButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 55px;
`;

const MessageView: FC = () => {
  const messagesEndRef = useRef(null);
  const client = useApolloClient() as ApolloClient<NormalizedCacheObject>;
  const [content, setContent] = useState('');
  const { allMessages, sendMessage, recipient, refetchMessages } = useContext(
    MessageContext,
  );

  const { data: newMessage, loading } = useSubscription(ON_NEW_MESSAGE, {
    variables: { id: recipient?.id || '' },
  });

  useEffect(() => {
    if (newMessage) {
      refetchMessages();
      scrollToBottom();
    }
  }, [loading, newMessage]);

  const handleSend = async () => {
    try {
      await sendMessage(content, recipient?.id || '');
      setContent('');
      scrollToBottom();
    } catch (e: any) {
      alert(e.message);
    }
  };
  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };
  const scrollToBottom = () => {
    const el = (messagesEndRef.current) as any;
    el.scrollIntoView({ behavior: 'smooth' });
  };
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
        <div ref={messagesEndRef} />
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
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyPress={handleKeyPress}
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
