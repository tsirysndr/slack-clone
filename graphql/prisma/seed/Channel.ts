import { PrismaClient } from '.prisma/client';

export const ChannelSeed = async (prisma: PrismaClient) => {
  const channels = [
    {
      name: 'aléatoire',
      creator: null,
    },
    {
      name: 'général',
      creator: null,
    },
  ];

  for (const data of channels) {
    const creator = await prisma.user.findFirst({
      where: { username: 'user1' },
    });
    const user2 = await prisma.user.findFirst({
      where: { username: 'user2' },
    });
    const user3 = await prisma.user.findFirst({
      where: { username: 'user3' },
    });
    const count = await prisma.channel.count({
      where: { name: data.name },
    });
    if (count > 0) {
      console.log(`Channel ${data.name} already exists`);
      continue;
    }
    data.creator = { connect: { id: creator.id } };
    const channel = await prisma.channel.create({ data });
    
    await prisma.users_channels.createMany({
      data: [
        {
          userId: creator.id,
          channelId: channel.id,
        },
        {
          userId: user2.id,
          channelId: channel.id,
        },
        {
          userId: user3.id,
          channelId: channel.id,
        }
      ],
    });
  
  }
};
