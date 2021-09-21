import { extendType } from 'nexus';
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
  },
});
