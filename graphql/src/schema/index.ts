import { asNexusMethod, makeSchema } from 'nexus';
import Channel from './Channel';
import Message from './Message';
import User from './User';
import { DateTimeResolver } from 'graphql-scalars';

export const DateTime = asNexusMethod(DateTimeResolver, 'date');

export const schema = makeSchema({
  types: [Channel, Message, User, DateTime],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  contextType: {
    module: require.resolve('../context'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
});
