import { mutationType, stringArg, nonNull } from 'nexus';
import { Context } from '../../../context';

export const ChannelMutation = mutationType({
  definition(t) {
    t.field('createChannel', {
      type: 'channel',
      args: {
        name: nonNull(stringArg())
      },
      resolve: (_, args, ctx: Context) => {
        return ctx.prisma.channel.create({
          data: {
            name: args.name || '',
            creator: {
              connect: { id: ''},
            },
          }
        });
      }
    });
  },
});
