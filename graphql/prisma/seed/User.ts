import { PrismaClient } from '.prisma/client';
import bcrypt from 'bcrypt';

export const UserSeed = async (prisma: PrismaClient) => {
  const users = [
    {
      email: 'tsiry.sndr@yopmail.com',
      firstName: 'Tsiry',
      lastName: 'Sandratraina',
      username: 'user1',
      password: 'password1',
    },
    {
      email: 'john@yopmail.com',
      firstName: 'John',
      lastName: 'Doe',
      username: 'user2',
      password: 'password2',
    },
    {
      email: 'koto@yopmail',
      firstName: 'Koto',
      lastName: 'Rakoto',
      username: 'user3',
      password: 'password3',
    },
  ];

  for (const data of users) {
    const count = await prisma.user.count({
      where: { username: data.username },
    });
    if (count > 0) {
      console.log(`User ${data.username} already exists`);
      continue;
    }
    data.password = await bcrypt.hash(data.password, 10);
    await prisma.user.create({ data });
  }
};
