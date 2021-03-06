import { message } from '.prisma/client';
import { withFilter } from 'graphql-subscriptions';
import { nonNull, stringArg, subscriptionField } from 'nexus';
import { Context } from '../../context';

export const MessageSubscription = subscriptionField('newMessage', {
  type: 'message',
  args: {
    id: nonNull(stringArg())
  },
  subscribe: withFilter(
    (_, args, ctx: Context) => ctx.pubsub.asyncIterator('NEW_MESSAGE'),
    (payload: message, args, ctx) => {
      //console.log('payload', payload);
      //console.log('args.id', args.id);
      /*
      if (payload.receiverId === args.id || payload.channelId === args.id) {
        return true;
      }
      */
      return true;
    },
  ),
  resolve: async (payload: message, args, ctx) => {
    return payload;
  },
});
