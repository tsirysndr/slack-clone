import { extendType, nonNull, stringArg } from 'nexus';
import { Context } from '../../../context';

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('allUsers', {
      type: 'user',
      resolve: (_, _args, ctx: Context) => {
        return ctx.prisma.user.findMany();
      },
    });

    t.field('findUser', {
      type: 'user',
      args: {
        id: nonNull(stringArg()),
      },
      resolve: (_, args, ctx: Context) => {
        return ctx.prisma.user.findFirst({
          where: { id: args.id },
        });
      },
    });
  },
});
