
const resolvers = {
  Query: {
    forecast: async (_, { latitude, longitude }, { dataSources }) => {
      return dataSources.forecastAPI.getForecast({latitude, longitude});
    }
  }
}

export default resolvers;