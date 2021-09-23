import { PrismaClient, user } from '.prisma/client';
import { randomBytes } from 'crypto';
import { Redis } from 'ioredis';

export async function decodeAccessToken(
  req: any,
  prisma: PrismaClient,
  redis: Redis
): Promise<user | null> {
  if (req && req.headers && req.headers.authorization) {
    const accessToken = req.headers.authorization.replace('Bearer ', '');
    const id = await redis.get(accessToken);
    if (!id) {
      return null;
    }
    return prisma.user.findFirst({ where: { id } });
  }
  return null;
}

export const randomStr = (length?: number) => {
  return randomBytes(length || 54)
    .toString('base64')
    .replace(/\//gi, '*');
};
