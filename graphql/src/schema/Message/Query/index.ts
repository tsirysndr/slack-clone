import { extendType, nonNull, stringArg } from 'nexus';
import { Context } from '../../../context';

export const MessageQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('allMessages', {
      type: 'message',
      resolve: (_, args, ctx: Context) => {
        return ctx.prisma.message.findMany();
      },
    });
    t.field('findMessage', {
      type: 'message',
      args: {
        id: nonNull(stringArg())
      },
      resolve: (_, { id }, ctx: Context) => {
        return ctx.prisma.message.findFirst({ where: { id } });
      }
    });
  },
});
