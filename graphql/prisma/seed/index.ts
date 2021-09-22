import { PrismaClient } from '.prisma/client';
import { ChannelSeed } from './Channel';
import { UserSeed } from './User';

const prisma = new PrismaClient();

const main = async () => {
  await UserSeed(prisma);
  await ChannelSeed(prisma);
  console.log('🏋️‍  Seed up');
};

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
