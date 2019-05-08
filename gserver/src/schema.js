const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    forecast(latitude: Float!, longitude: Float!): Forecast!
    forecastByTime(latitude: Float!, longitude: Float!, time: Int!) : Forecast!
  }

  type Forecast {
    latitude: Float
    longitude: Float
    timezone: String
    currently: Detail
    hourly: Weather
    daily: Weather
    flags: Flag
    offset: Int
  }

  type Weather {
    summary: String,
    icon: String
    data: [Detail]
  }

  type Detail {
    time:Int
    summary:String
    icon:String
    nearestStormDistance:Float
    nearestStormBearing:Float
    precipIntensity:Float
    precipProbability:Float
    temperature:Float
    apparentTemperature:Float
    dewPoint:Float
    humidity:Float
    pressure:Float
    windSpeed:Float
    windGust:Float
    windBearing:Float
    cloudCover:Float
    uvIndex:Float
    visibility:Float
    ozone:Float
  }

  type Flag {
    sources: [String]
    nearestStation: Float
    units: String
  }
`;

export default typeDefs;