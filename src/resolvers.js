
const resolvers = {
  Query: {
    forecast: async (_, { latitude, longitude }, { dataSources }) => {
      return dataSources.forecastAPI.getForecast({latitude, longitude, units:"auto"});
    },
    forecastByDate: async (_, { latitude, longitude, date }, { dataSources }) => {
      return dataSources.forecastAPI.getForecastByDate({latitude, longitude, date, units:"auto"});
    },
    hello: () => {return "Welcome to DarkSky GraphQL API"}
  }
}

export default resolvers;