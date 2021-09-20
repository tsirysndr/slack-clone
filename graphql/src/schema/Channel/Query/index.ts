import { queryType } from 'nexus';
import { Context } from '../../../context';

export const ChannelQuery = queryType({
  definition(t) {
    t.nonNull.list.field('allChannels', {
      type: 'channel',
      resolve: (_parent, _args, ctx: Context) => {
        return ctx.prisma.channel.findMany();
      }
    })
  },
});
