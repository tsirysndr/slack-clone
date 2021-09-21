import Redis from 'ioredis';
import { RedisPubSub } from 'graphql-redis-subscriptions';

export function configureRedis(): { redis: Redis.Redis, pubsub: RedisPubSub } {
  const options = {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT ? +process.env.REDIS_PORT : 6379,
    retryStrategy: (times: number) => {
      // reconnect after
      return Math.min(times * 50, 2000);
    },
  };
  const pubsub = new RedisPubSub({
    publisher: new Redis(options),
    subscriber: new Redis(options),
  });
  const redis = new Redis(options);

  return { redis, pubsub };
}
