import moment from 'moment';
import { FC } from 'react';
import { AllMessages_allMessages } from '../../GraphQL/Message/types/AllMessages';
import styled from 'styled-components';
interface MessageProps {
  message: AllMessages_allMessages | null;
}

const Date = styled.div`
  margin-left: 15px;
  font-size: 14px;
  color: #585858c7;
  font-weight: 500;
`;

const Message: FC<MessageProps> = (props: MessageProps) => {
  return (
    <div style={{ padding: 15, fontWeight: 500 }}>
      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <div style={{ fontWeight: 'bold' }}>
          {props.message?.sender.firstName} {props.message?.sender.lastName}
        </div>
        <Date>
          {moment(props.message?.createdAt).format('MMM DD, H:mm:ss')}
        </Date>
      </div>
      <div style={{ padding: 5 }}>{props.message?.content}</div>
    </div>
  );
};

export default Message;
