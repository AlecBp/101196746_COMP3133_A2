import "dotenv/config";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { authCtx } from "./context/auth";
import { typeDefs, resolvers } from "./graphql";
import cookieParser from "cookie-parser";
import { AuthService } from "./service/auth";

const app = express();
const PORT = process.env.PORT || 4001;

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);
app.use(cookieParser());

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req, res }) => {
      return {
        req,
        res,
        auth: authCtx(req),
      };
    },
  });
  server.applyMiddleware({ app, cors: false });

  await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(result => {
      app.listen(PORT, () =>
        console.log(
          `🚀 GraphQL Server running on port: http://localhost:${PORT}/graphql`
        )
      );
    })
    .catch(err => console.log("MongoDB connection failed", err));
};

startServer();
