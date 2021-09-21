import { PrismaClient } from '.prisma/client';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import IORedis from 'ioredis';
import { configureRedis } from './redis';

export interface Context {
  prisma: PrismaClient;
  pubsub: RedisPubSub;
  redis: IORedis.Redis;
}

const prisma = new PrismaClient();

export const context: Context = {
  prisma,
  ...configureRedis(),
};
