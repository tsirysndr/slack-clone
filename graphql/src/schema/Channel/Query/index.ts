import { extendType, nonNull, stringArg } from 'nexus';
import { Context } from '../../../context';

export const ChannelQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('allChannels', {
      type: 'channel',
      resolve: (_parent, _args, ctx: Context) => {
        return ctx.prisma.channel.findMany();
      }
    })
    t.field('findChannel', {
      type: 'channel',
      args: {
        id: nonNull(stringArg()),
      },
      resolve: (_, { id }, ctx: Context) => {
        return ctx.prisma.channel.findFirst({ where: { id } });
      }
    })
  },
});
