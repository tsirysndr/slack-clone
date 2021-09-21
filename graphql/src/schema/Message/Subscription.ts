import { withFilter } from 'graphql-subscriptions';
import { subscriptionField } from 'nexus';
import { Context } from '../../context';

export const MessageSubscription = subscriptionField('newMessage', {
  type: 'message',
  subscribe: withFilter(
    (_, args, ctx: Context) => ctx.pubsub.asyncIterator('NEW_MESSAGE'),
    (payload, args, ctx) => {
      return true;
    },
  ),
  resolve: async (payload, args, ctx) => {
    return payload.message;
  },
});
