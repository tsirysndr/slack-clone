import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { schema } from './schema';
import { context, createContext } from './context';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use('/graphql', bodyParser.json({ limit: '200mb' }));

const { redis } = context;

const server = new ApolloServer({
  schema,
  context: (req) => createContext(req, redis),
  introspection: true,
});

server.start().then(() => {
  server.applyMiddleware({ app, bodyParserConfig: { limit: '200mb' } });
  console.log(`🚀 Server ready`);
});

const httpServer = createServer(app);

const PORT = process.env.PORT || 4000;

httpServer.listen(PORT, () => {
  new SubscriptionServer(
    {
      // This is the `schema` we just created.
      schema,
      // These are imported from `graphql`.
      execute,
      subscribe,
      onOperation: (message: string, params: any) => {
        return {
          ...params,
          context,
        };
      },
    },
    {
      // This is the `httpServer` we created in a previous step.
      server: httpServer,
      // This `server` is the instance returned from `new ApolloServer`.
      path: server.graphqlPath,
    },
  );

  console.log(
    `🚀 Query endpoint ready at http://localhost:${PORT}${server.graphqlPath}`,
  );
  console.log(
    `🚀 Subscription endpoint ready at ws://localhost:${PORT}${server.graphqlPath}`,
  );
});
