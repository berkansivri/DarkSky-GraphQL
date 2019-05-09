
const resolvers = {
  Query: {
    forecast: async (_, { latitude, longitude }, { dataSources }) => {
      return dataSources.forecastAPI.getForecast({latitude, longitude});
    },
    forecastByDate: async (_, { latitude, longitude, date }, { dataSources }) => {
      return dataSources.forecastAPI.getForecastByDate({latitude, longitude, date});
    }
  }
}

export default resolvers;