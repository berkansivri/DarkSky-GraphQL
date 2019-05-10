const { RESTDataSource } = require("apollo-datasource-rest");

class forecastAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://api.darksky.net/forecast/${ process.env.DARKSKY_SECRET_KEY || 'dd066071def900a39ecca2eea88478f1' }/`;
  }

  async getForecast({ latitude, longitude }) {
    const response = await this.get(`${latitude},${longitude}`);
    return response ? this.forecastReducer(response) : {};
  }

  async getForecastByDate({ latitude, longitude, date }) {
    var unixDate = parseInt((new Date(date).getTime() / 1000).toFixed(0));
    console.log(unixDate)
    const response = await this.get(`${latitude},${longitude},${unixDate}`);
    return response ? this.forecastReducer(response) : {};
  }

  forecastReducer(forecast) {
    return {
      latitude: forecast.latitude,
      longitude: forecast.longitude,
      timezone: forecast.timezone,
      currently: this.hourlyDataReducer(forecast.currently),
      hourly: this.hourlyReducer(forecast.hourly),
      daily: this.dailyReducer(forecast.daily),
      flags: {
        sources: forecast.flags.sources,
        nearestStation: forecast.flags.nearestStation,
        units: forecast.flags.units
      },
      offset: forecast.offset
    };
  }

  hourlyReducer(prop) {
    return {
      summary: prop.summary,
      icon: prop.icon,
      data: prop.data.map(d => this.hourlyDataReducer(d))
    };
  }

  dailyReducer(prop) {
    return {
      summary: prop.summary,
      icon: prop.icon,
      data: prop.data.map(d => this.dailyDataReducer(d))
    };
  }

  hourlyDataReducer(prop) {
    return {
      time: prop.time,
      summary: prop.summary,
      icon: prop.icon,
      nearestStormDistance: prop.nearestStormDistance,
      nearestStormBearing: prop.nearestStormBearing,
      precipIntensity: prop.precipIntensity,
      precipProbability: prop.precipProbability,
      precipType: prop.precipType,
      temperature: prop.temperature,
      apparentTemperature: prop.apparentTemperature,
      dewPoint: prop.dewPoint,
      humidity: prop.humidity,
      pressure: prop.pressure,
      windSpeed: prop.windSpeed,
      windGust: prop.windGust,
      windBearing: prop.windBearing,
      cloudCover: prop.cloudCover,
      uvIndex: prop.uvIndex,
      visibility: prop.visibility,
      ozone: prop.ozone
    };
  }

  dailyDataReducer(prop) {
    return {
      time: prop.time,
      summary: prop.summary,
      icon: prop.icon,
      sunriseTime: prop.sunriseTime,
      sunsetTime: prop.sunsetTime,
      moonPhase: prop.moonPhase,
      precipIntensity: prop.precipIntensity,
      precipIntensityMax: prop.precipIntensityMax,
      precipIntensityMaxTime: prop.precipIntensityMaxTime,
      precipProbability: prop.precipProbability,
      precipType: prop.precipType,
      temperatureHigh: prop.temperatureHigh,
      temperatureHighTime: prop.temperatureHighTime,
      temperatureLow: prop.temperatureLow,
      temperatureLowTime: prop.temperatureLowTime,
      apparentTemperatureHigh: prop.apparentTemperatureHigh,
      apparentTemperatureHighTime: prop.apparentTemperatureHighTime,
      apparentTemperatureLow: prop.apparentTemperatureLow,
      apparentTemperatureLowTime: prop.apparentTemperatureLowTime,
      dewPoint: prop.dewPoint,
      humidity: prop.humidity,
      pressure: prop.pressure,
      windSpeed: prop.windSpeed,
      windGust: prop.windGust,
      windGustTime: prop.windGustTime,
      windBearing: prop.windBearing,
      cloudCover: prop.cloudCover,
      uvIndex: prop.uvIndex,
      uvIndexTime: prop.uvIndexTime,
      visibility: prop.visibility,
      ozone: prop.ozone,
      temperatureMin: prop.temperatureMin,
      temperatureMinTime: prop.temperatureMinTime,
      temperatureMax: prop.temperatureMax,
      temperatureMaxTime: prop.temperatureMaxTime,
      apparentTemperatureMin: prop.apparentTemperatureMin,
      apparentTemperatureMinTime: prop.apparentTemperatureMinTime,
      apparentTemperatureMax: prop.apparentTemperatureMax,
      apparentTemperatureMaxTime: prop.apparentTemperatureMaxTime
    };
  }
}

export default forecastAPI;
