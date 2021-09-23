import { FC } from 'react';
import { AllMessages_allMessages } from '../../GraphQL/Message/types/AllMessages';

interface MessageProps {
  message: AllMessages_allMessages | null;
}

const Message: FC<MessageProps> = (props: MessageProps) => {
  return (
    <div style={{ padding: 15, fontWeight: 500 }}>
      <div style={{ fontWeight: 'bold' }}>
        {props.message?.sender.firstName} {props.message?.sender.lastName}
      </div>
      <div style={{ padding: 5 }}>{props.message?.content}</div>
    </div>
  );
};

export default Message;
