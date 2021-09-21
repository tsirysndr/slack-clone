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
    t.field('editProfile', {
      type: 'user',
      args: {
        id: nonNull(stringArg()),
        password: stringArg(),
        username: stringArg(),
        firstName: stringArg(),
        lastName: stringArg(),
      },
      resolve: (_, args, ctx: Context) => {
        return {} as any;
      }
    })
  },
});
