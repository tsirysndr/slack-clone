import { extendType, nonNull, stringArg } from 'nexus';
import { Context } from '../../../context';

export const UserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('login', {
      type: 'user',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: (_, args, ctx: Context) => {
        return {} as any;
      },
    });
  },
});
