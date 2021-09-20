import { objectType } from 'nexus';
import { channel } from 'nexus-prisma';

export const Channel = objectType({
  name: channel.$name,
  definition(t) {
    t.field(channel.id);
    t.field(channel.name);
    t.field(channel.creatorId);
    t.field(channel.creator);
    t.field(channel.createdAt);
    t.field(channel.updatedAt);
    t.field(channel.messages);
    t.field(channel.isPrivate);
  },
});
