require('dotenv').config();
const { ApolloServer } = require("apollo-server");
import typeDefs from "./schema";
import resolvers from "./resolvers";
import forecastAPI from './datasources/forecast';

const dataSources = () => ({
  forecastAPI: new forecastAPI()
})

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources, 
  engine: {
    apiKey: process.env.ENGINE_API_KEY
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
