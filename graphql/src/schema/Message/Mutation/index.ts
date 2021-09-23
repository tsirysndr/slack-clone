import { extendType, stringArg, nonNull } from 'nexus';
import { Context } from '../../../context';

export const MessageMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('sendMessage', {
      type: 'message',
      args: {
        recipient: nonNull(stringArg()),
        content: nonNull(stringArg()),
      },
      resolve: async (_, args, ctx: Context) => {
        if (!ctx.currentUser) {
          throw new Error('You must be logged in to send a message');
        }

        const recipientCount = await ctx.prisma.user.count({
          where: { id: args.recipient },
        });
        const channelCount = await ctx.prisma.channel.count({
          where: { id: args.recipient },
        });

        if (recipientCount === 0 && channelCount === 0) {
          throw new Error('Recipient not found');
        }
        if (recipientCount > 0) {
          const msg = await ctx.prisma.message.create({
            data: {
              content: args.content,
              sender: { connect: { id: ctx.currentUser.id } },
              receiver: { connect: { id: args.recipient } },
            },
          });
          await ctx.pubsub.publish('NEW_MESSAGE', msg);
          return msg;
        }
        if (channelCount > 0) {
          const msg = await ctx.prisma.message.create({
            data: {
              content: args.content,
              sender: { connect: { id: ctx.currentUser.id } },
              channel: { connect: { id: args.recipient } },
            },
          });
          await ctx.pubsub.publish('NEW_MESSAGE', msg);
          return msg;
        }
        throw new Error('Recipient not found');
      },
    });
  },
});
