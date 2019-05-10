const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    forecast(latitude: Float!, longitude: Float!, units: String = "auto"): Forecast!
    forecastByDate( latitude: Float! longitude: Float! date: String!, units: String = "auto"): DateForecast!
    hello: String
  }

  type Forecast {
    latitude: Float
    longitude: Float
    timezone: String
    currently: currentlyData
    hourly: hourlyWeather
    daily: dailyWeather
    flags: Flag
    offset: Int
  }

  type DateForecast {
    latitude: Float
    longitude: Float
    timezone: String
    currently: dateCurrentlyData
    hourly: dateHourlyWeather
    daily: dateDailyWeather
    flags: Flag
    offset: Int
  }

  type hourlyWeather {
    summary: String
    icon: String
    data: [hourlyData]
  }

  type dateHourlyWeather {
    summary: String
    icon: String
    data: [dateHourlyData]
  }

  type dailyWeather {
    summary: String
    icon: String
    data: [dailyData]
  }

  type dateDailyWeather {
    summary: String
    icon: String
    data: [dateDailyData]
  }

  type currentlyData {
    time: Int
    summary: String
    icon: String
    nearestStormDistance: Float
    nearestStormBearing: Float
    precipIntensity: Float
    precipProbability: Float
    temperature: Float
    apparentTemperature: Float
    dewPoint: Float
    humidity: Float
    pressure: Float
    windSpeed: Float
    windGust: Float
    windBearing: Float
    cloudCover: Float
    uvIndex: Int
    visibility: Float
    ozone: Float
  }

  type dateCurrentlyData {
    time: Int
    summary: String
    icon: String
    precipIntensity: Float
    precipProbability: Float
    precipType: String
    temperature: Float
    apparentTemperature: Float
    dewPoint: Float
    humidity: Float
    pressure: Float
    windSpeed: Float
    windGust: Float
    windBearing: Float
    cloudCover: Float
    uvIndex: Int
    visibility: Float
  }

  type hourlyData {
    time: Int
    summary: String
    icon: String
    precipIntensity: Float
    precipProbability: Float
    temperature: Float
    apparentTemperature: Float
    dewPoint: Float
    humidity: Float
    pressure: Float
    windSpeed: Float
    windGust: Float
    windBearing: Float
    cloudCover: Float
    uvIndex: Int
    visibility: Float
    ozone: Float
  }

  type dateHourlyData {
    time: Int
    summary: String
    icon: String
    precipIntensity: Float
    precipProbability: Float
    precipType: String
    temperature: Float
    apparentTemperature: Float
    dewPoint: Float
    humidity: Float
    pressure: Float
    windSpeed: Float
    windGust: Float
    windBearing: Float
    cloudCover: Float
    uvIndex: Float
    visibility: Float
  }

  type dailyData {
    time: Int
    summary: String
    icon: String
    sunriseTime: Int
    sunsetTime: Int
    moonPhase: Float
    precipIntensity: Float
    precipIntensityMax: Float
    precipIntensityMaxTime: Int
    precipProbability: Float
    precipType: Float
    temperatureHigh: Float
    temperatureHighTime: Int
    temperatureLow: Float
    temperatureLowTime: Int
    apparentTemperatureHigh: Float
    apparentTemperatureHighTime: Int
    apparentTemperatureLow: Float
    apparentTemperatureLowTime: Int
    dewPoint: Float
    humidity: Float
    pressure: Float
    windSpeed: Float
    windGust: Float
    windGustTime: Int
    windBearing: Float
    cloudCover: Float
    uvIndex: Int
    uvIndexTime: Int
    visibility: Float
    ozone: Float
    temperatureMin: Float
    temperatureMinTime: Int
    temperatureMax: Float
    temperatureMaxTime: Int
    apparentTemperatureMin: Float
    apparentTemperatureMinTime: Int
    apparentTemperatureMax: Float
    apparentTemperatureMaxTime: Int
  }

  type dateDailyData {
    time: Int
    summary: String
    icon: String
    sunriseTime: Int
    sunsetTime: Int
    moonPhase: Float
    precipIntensity: Float
    precipIntensityMax: Float
    precipIntensityMaxTime: Int
    precipProbability: Float
    precipType: Float
    temperatureHigh: Float
    temperatureHighTime: Int
    temperatureLow: Float
    temperatureLowTime: Int
    apparentTemperatureHigh: Float
    apparentTemperatureHighTime: Int
    apparentTemperatureLow: Float
    apparentTemperatureLowTime: Int
    dewPoint: Float
    humidity: Float
    pressure: Float
    windSpeed: Float
    windGust: Float
    windGustTime: Int
    windBearing: Float
    cloudCover: Float
    uvIndex: Int
    uvIndexTime: Int
    visibility: Float
    temperatureMin: Float
    temperatureMinTime: Int
    temperatureMax: Float
    temperatureMaxTime: Int
    apparentTemperatureMin: Float
    apparentTemperatureMinTime: Int
    apparentTemperatureMax: Float
    apparentTemperatureMaxTime: Int
  }

  type Flag {
    sources: [String]
    nearestStation: Float
    units: String
  }
`;

export default typeDefs;
