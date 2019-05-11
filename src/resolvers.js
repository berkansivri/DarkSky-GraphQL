
const resolvers = {
  Query: {
    forecast: async (_, { latitude, longitude, units }, { dataSources }) => {
      return dataSources.forecastAPI.getForecast({latitude, longitude, units: units || "ca"});
    },
    forecastByDate: async (_, { latitude, longitude, date, units }, { dataSources }) => {
      return dataSources.forecastAPI.getForecastByDate({latitude, longitude, date, units: units || "ca"});
    },
    hello: () => {return "Welcome to DarkSky GraphQL API"}
  }
}

export default resolvers;