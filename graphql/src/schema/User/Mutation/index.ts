import { extendType, nonNull, stringArg } from 'nexus';
import { Context } from '../../../context';
import bcrypt from 'bcrypt';
import { randomStr } from '../../../lib/auth';

export const UserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('login', {
      type: 'user',
      args: {
        username: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_, args, ctx: Context) => {
        const { username, password } = args;
        const user = await ctx.prisma.user.findFirst({ where: { username } });
        if (!user) {
          throw new Error('User not found');
        };
        const isValid = await bcrypt.compare(password, user.password || '');
        if (!isValid) {
          throw new Error('Invalid password');
        }
        const token = randomStr();
        await ctx.redis.setex(token, 48 * 3600, user.id);
        return { ...user, token } as any;
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
