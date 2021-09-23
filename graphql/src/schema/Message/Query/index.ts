import { extendType, nonNull, stringArg } from 'nexus';
import { Context } from '../../../context';

export const MessageQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('allMessages', {
      type: 'message',
      args: {
        receiverId: stringArg(),
        channelId: stringArg(),
      },
      resolve: (_, args: any, ctx: Context) => {
        if (args.channelId) {
          return ctx.prisma.message.findMany({ where: { channelId: args.channelId } });
        }
        return ctx.prisma.message.findMany({ where: { receiverId: args.receiverId } });
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
