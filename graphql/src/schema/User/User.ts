import { objectType } from 'nexus';
import { user } from 'nexus-prisma';

export const User = objectType({
  name: user.$name,
  definition(t) {
    t.field(user.id);
    t.field(user.email);
    t.field(user.username);
    t.field(user.firstName);
    t.field(user.lastName);
    t.field(user.channels);
    t.field(user.createdAt);
    t.field(user.updatedAt);
    t.field(user.sent_messages);
    t.field(user.received_messages);
  },
});
