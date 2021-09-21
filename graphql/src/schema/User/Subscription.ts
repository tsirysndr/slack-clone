import { withFilter } from 'graphql-subscriptions';
import { nonNull, stringArg, subscriptionField } from 'nexus';
import { Context } from '../../context';

export const UserSubscription = subscriptionField('userOnlineStatus', {
  type: 'user',
  args: {
    id: nonNull(stringArg()),
  },
  subscribe: withFilter(
    (_, args, ctx: Context) => ctx.pubsub.asyncIterator('USER_ONLINE'),
    (payload, args, ctx) => {
      return true;
    },
  ),
  resolve: async (payload, args, ctx) => {
    return payload.user;
  },
});
