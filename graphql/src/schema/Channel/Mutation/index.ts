import { stringArg, nonNull, extendType, booleanArg } from 'nexus';
import { Context } from '../../../context';
import cuid from 'cuid';

export const ChannelMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createChannel', {
      type: 'channel',
      args: {
        name: nonNull(stringArg()),
        isPrivate: booleanArg(),
      },
      resolve: (_, args, ctx: Context) => {
        return ctx.prisma.channel.create({
          data: {
            name: args.name || cuid(),
            isPrivate: args.isPrivate || false,
            creator: {
              connect: { id: '' },
            },
          }
        });
      }
    });
    t.field('editChannel', {
      type: 'channel',
      args: {
        id: nonNull(stringArg()),
        name: stringArg(),
        isPrivate: booleanArg(),
      },
      resolve: (_, args, ctx: Context) => {
        return ctx.prisma.channel.create({
          data: {
            name: args.name || cuid(),
            isPrivate: args.isPrivate || false,
            creator: {
              connect: { id: '' },
            },
          }
        });
      }
    });
  },
});
