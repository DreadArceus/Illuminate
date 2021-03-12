import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import mikroOrmConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { MyContext } from "./types";
import connectRedis from "connect-redis";
import session from "express-session";
import redis from "redis";
import { __prod__ } from "./constants";
import { GuideResolver } from "./resolvers/guide";
import cors from "cors";

declare module "express-session" {
  export interface SessionData {
    guideID: number;
  }
}

const main = async () => {
  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();

  const orm = await MikroORM.init(mikroOrmConfig);
  await orm.getMigrator().up();

  const app = express();

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
  app.use(
    session({
      name: "qid",
      store: new RedisStore({
        client: redisClient,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
        sameSite: "lax",
        secure: __prod__,
      },
      secret: "someothersecretbro",
      resave: false,
      saveUninitialized: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [GuideResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({ em: orm.em, req, res }),
  });
  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(4000, () => {
    console.log("server started on port 4000");
  });
};

main();
