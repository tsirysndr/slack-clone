import { FC, useContext, useEffect, useState } from 'react';
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
} from '@apollo/client';

const SendButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 55px;
`;

const MessageView: FC = () => {
  const client = useApolloClient() as ApolloClient<NormalizedCacheObject>;
  const [content, setContent] = useState('');
  const { allMessages, sendMessage, recipient, refetchMessages } = useContext(
    MessageContext,
  );

  useEffect(() => {
    console.log('recipient id', recipient?.id);
    if (recipient == null) {
      return;
    }
    const subscription = client
      .subscribe({
        query: ON_NEW_MESSAGE,
        variables: {
          id: recipient.id,
        },
      })
      .subscribe({
        next({ data: { onNewMessage } }) {
          console.log('---> new message');
          refetchMessages();
        },
        error(err) {
          console.log('=> error');
          console.log(err);
        },
      });
    return subscription.unsubscribe();
  }, [recipient]);

  const handleSend = async () => {
    try {
      await sendMessage(content, recipient?.id || '');
      setContent('');
    } catch (e: any) {
      alert(e.message);
    }
  };
  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      handleSend();
    }
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
