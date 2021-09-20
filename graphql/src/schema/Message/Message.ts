import { objectType } from 'nexus';
import { message } from 'nexus-prisma';

export const Message = objectType({
  name: message.$name,
  definition(t) {
    t.field(message.id);
    t.field(message.content);
    t.field(message.senderId);
    t.field(message.receiverId);
    t.field(message.sender);
    t.field(message.receiver);
    t.field(message.createdAt);
    t.field(message.updatedAt);
    t.field(message.channel);
    t.field(message.channelId);
  },
});
