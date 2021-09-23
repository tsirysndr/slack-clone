import { PrismaClient, user } from '.prisma/client';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import IORedis from 'ioredis';
import { decodeAccessToken } from './lib/auth';
import { configureRedis } from './redis';

export interface Context {
  prisma: PrismaClient;
  pubsub: RedisPubSub;
  redis: IORedis.Redis;
  currentUser?: user | null;
}

export const prisma = new PrismaClient();

export async function createContext(
  { req }: any,
  redis: IORedis.Redis,
): Promise<Context> {
  const currentUser = await decodeAccessToken(req, prisma, redis);
  return {
    prisma,
    currentUser,
    ...configureRedis(),
  };
}

export const context: Context = {
  prisma,
  ...configureRedis(),
};
