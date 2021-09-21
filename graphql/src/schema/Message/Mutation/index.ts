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
      resolve: (_, args, ctx: Context) => {
        return {} as any;
      },
    });
  },
});
